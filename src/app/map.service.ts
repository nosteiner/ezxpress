import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class MapService {
  public addressUpdated : Observable<any>;
  public addressSubject: Subject<any>;
  localAddress : string;
  constructor() { 

    this.addressSubject = new Subject<any>();
    this.addressUpdated = this.addressSubject.asObservable();
    this.addressSubject.next("test")
  }

  reverseAddress(lat, lng){
   
    var geocoder: google.maps.Geocoder = new google.maps.Geocoder; 
    //alert("teste "+ lat + ' ' + lng)
    //var latlng = new google.maps.LatLng(31.813506, 35.216292);
    //var request = { latLng: latlng };
    var latlng = {lat: lat , lng: lng};
    geocoder.geocode({"location": latlng }, (results, status) => {
        console.log(results)
     
        this.localAddress = results[0].formatted_address
        console.log(this.localAddress)
        this.addressSubject.next(this.localAddress)
        
     
    
      });
  }

}
