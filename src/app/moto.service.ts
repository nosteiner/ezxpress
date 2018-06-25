import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { HttpClient } from '@angular/common/http';
import { MotoBoy } from './MotoBoy';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoService {

  lat: number //= 51.678418;
  lng: number //= 7.809007;

  motoBoys: MotoBoy[] = [];
  currentMotoBoy: MotoBoy = new MotoBoy();


  public singleMotoObservable: Observable<MotoBoy>;
  private singleMotoSubject: Subject<MotoBoy> = new Subject<MotoBoy>();

  constructor(private mapService: MapService, private http: HttpClient) {
    this.singleMotoObservable = this.singleMotoSubject.asObservable();
  }

  getMoto(id) {
    this.http.get<MotoBoy>('https://localhost:3000/motoboysApi/' + id).subscribe(data => {
      this.currentMotoBoy = data;
      this.singleMotoSubject.next(data)
      console.log(this.currentMotoBoy)
      console.log("a")
     })
  }

  shareLiveLocation(email) {
    this.singleMotoObservable.subscribe(()=>{
      setInterval(this.getMotoCurrentLocation(),5000);
    })
    this.getMoto(email);
  }

  

  postMotoLocation(currentMotoBoy) {
    let id = currentMotoBoy.idNumber
    this.http.put<MotoBoy>('https://api/motoBoys/updateMotoBoy/' + id, { motoBoy: currentMotoBoy }).subscribe((data) => {
      //update motoboys array
      this.currentMotoBoy = data;
      this.singleMotoSubject.next(data);
      console.log("d")
    })
  }

getMotoCurrentLocation(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      this.currentMotoBoy.latitude = position.coords.latitude;
      this.currentMotoBoy.longitude = position.coords.longitude;
      this.reverseAddress(this.lat, this.lng);
      this.postMotoLocation(this.currentMotoBoy)
    })
  }    
}

  checkGoogleAddress(localAddress) {
    var geocoder: google.maps.Geocoder = new google.maps.Geocoder;
    console.log(localAddress)
    geocoder.geocode({ address: localAddress }, (results) => {
      this.lat = Number(results[0].geometry.location.lat);
      this.lng = Number(results[0].geometry.location.lat);
      console.log(this.lat)
    })
  }

  reverseAddress(lat, lng) {
    this.mapService.reverseAddress(lat, lng);
  }

}
