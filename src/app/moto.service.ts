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

  async getMoto(email) {
    // this.http.get<MotoBoy>('https://api/motoBoys?email=' + email).subscribe(data => {
      let data = {
        userName : "moshe1",
    idNumber : 1,
    firsName : "moshe",
    lastName : "israel",
    phone    : 525555555,
    email    : "email",
    rate     : 0,
    photo    : "https://png.icons8.com/color/50/000000/motorcycle.png",
    idPhoto  : "https://png.icons8.com/color/50/000000/motorcycle.png",
    latitude : null,
    longitude: null,
    icon: "https://png.icons8.com/color/50/000000/motorcycle.png"
      }
      this.currentMotoBoy = data;
      this.singleMotoSubject.next(data)
      console.log(this.currentMotoBoy)
      console.log("a")
    // })
  }

  shareLiveLocation(email) {
    this.singleMotoObservable.subscribe(()=>{
      this.getMotoCurrentLocation()
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
