import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class MapService {
  public addressUpdated : Observable<any>;
  public addressSubject: Subject<any>;
  public latLngUpdated : Observable<any>;
  public latLngSubject: Subject<any>;

  localAddress : string;
  lat: number //= 51.678418;
  lng: number //= 7.809007;
  constructor() { 

    this.addressSubject = new Subject<any>();
    this.addressUpdated = this.addressSubject.asObservable();

    this.latLngSubject = new Subject<any>();
    this.latLngUpdated = this.addressSubject.asObservable();
   // this.getCurrPosition();
  }

  // getCurrPosition() {
  //   debugger
  //   if (navigator.geolocation){
  //     navigator.geolocation.getCurrentPosition(position => 
  //       {
  //       this.lat = position.coords.latitude;
  //       this.lng = position.coords.longitude;
  //       this.latLngSubject.next({lat:this.lat, lng: this.lng})
  //       })
  
  //   }
  // }

  reverseAddress(lat, lng){
   
    var geocoder: google.maps.Geocoder = new google.maps.Geocoder; 
    var latlng = {lat: lat , lng: lng};
    geocoder.geocode({"location": latlng }, (results, status) => {
        console.log(results)
     
        this.localAddress = results[0].formatted_address
        console.log(this.localAddress)
        this.addressSubject.next(this.localAddress)
        
     
    
      });
  }

  updateDestination(latLng){
      
  }

}
