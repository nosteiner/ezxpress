import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { HttpClient } from '@angular/common/http';
import { MotoBoy } from './MotoBoy';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoService {

  motoBoys: MotoBoy[] = [];
  currentMotoBoy: MotoBoy = new MotoBoy();




  public singleMotoObservable: Observable<MotoBoy>;
  private singleMotoSubject: Subject<MotoBoy> = new Subject<MotoBoy>();

  constructor(private mapService: MapService, private http: HttpClient) {
    this.singleMotoObservable = this.singleMotoSubject.asObservable();
  }

  getMoto(id) {
    this.http.get<MotoBoy>('motoboysApi/' + id).subscribe(data => {
      this.currentMotoBoy = data[0];
      this.singleMotoSubject.next(data[0])
      console.log(this.currentMotoBoy)
   
    })
  }

  shareLiveLocation(id) {
    // this.singleMotoObservable.subscribe(() => {
    //   setInterval(this.getMotoCurrentLocation(), 5000);
    // })
    this.getMoto(id);
  }



  updateMotoBoy(currentMotoBoy) {
    let id = currentMotoBoy.motoboyId
    this.http.put<MotoBoy>('motoboysApi/update/' + id, { motoboy: currentMotoBoy }).subscribe((data) => {
      //update motoboys array
      this.currentMotoBoy = data;
      this.singleMotoSubject.next(data);

    })
  }

  unActivatMotoboy(currentMotoBoy) {
    currentMotoBoy.active = false;
    this.updateMotoBoy(currentMotoBoy);
  }

  getMotoCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.currentMotoBoy.latitude = position.coords.latitude;
        this.currentMotoBoy.longitude = position.coords.longitude;
        this.reverseAddress(this.currentMotoBoy.latitude, this.currentMotoBoy.longitude);
        this.updateMotoBoy(this.currentMotoBoy)


getMotoCurrentLocation(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      this.currentMotoBoy.latitude = position.coords.latitude;
      this.currentMotoBoy.longitude = position.coords.longitude;
      this.currentMotoBoy.position =  {
        type: 'Point',
        coordinates: [this.currentMotoBoy.longitude, this.currentMotoBoy.latitude]}
      this.reverseAddress(this.currentMotoBoy.latitude, this.currentMotoBoy.longitude);
      this.putMotoLocation(this.currentMotoBoy)

    })
  }    
}


  checkGoogleAddress(localAddress) {
    var geocoder: google.maps.Geocoder = new google.maps.Geocoder;
    // console.log(localAddress)
    geocoder.geocode({ address: localAddress }, (results) => {
      this.currentMotoBoy.latitude = Number(results[0].geometry.location.lat);
      this.currentMotoBoy.longitude = Number(results[0].geometry.location.lat);
      // console.log(this.currentMotoBoy.latitude)
    })
  }

  reverseAddress(lat, lng) {
    this.mapService.reverseAddress(lat, lng);
  }

  addMotoBoy(motoboy) {
    console.log("inside Add")
    this.http.post<MotoBoy>('motoboysApi/add', motoboy).subscribe((data) => {
      //update motoboys array?
      this.currentMotoBoy = data;
    })

  }


  getClosesMoto(lat,lng){
    
    this.http.get<Array<MotoBoy>>('motoboysApi/getClosesMoto/'+lat+'/'+lng).subscribe(data => {
      // send SMS to deliveries in data if dat.length > 0
        console.log(data)
      
     })
    }

}
