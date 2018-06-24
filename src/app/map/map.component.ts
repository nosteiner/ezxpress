import { Component, OnInit, Input } from '@angular/core';
import { MotoBoy } from '../MotoBoy';
import { Subject, Observable } from 'rxjs';

import {} from '@types/google-maps';
import { MapService } from '../map.service';




@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})



export class MapComponent  {
  @Input() newLat: number; 
  @Input() newLng: number;
  public addressUpdated : Observable<any>;
  public addressSubject: Subject<any>;

  lat: number //= 51.678418;
  lng: number //= 7.809007;
  moto1 = new MotoBoy();
  moto2 = new MotoBoy();
  moto3 = new MotoBoy();
  motoBoys: Array<MotoBoy>
  motoBoyIcon: string;
  localAddress :string;
  
  constructor(private mapService: MapService) {  

    // this.addressSubject = new Subject<any>();
    // this.addressUpdated = this.addressSubject.asObservable();
    // this.addressSubject.next("test")
    
    this.moto1.latitude = 32.051663;
    this.moto1.longitude = 34.765952;
    //this.moto1.icon = "https://png.icons8.com/color/50/000000/motorcycle.png"
    this.moto2.latitude = 32.051750;
    this.moto2.longitude = 34.768724;
    //this.moto2.icon = this.moto
    this.moto3.latitude = 32.048731;
    this.moto3.longitude = 34.763552;
    this.motoBoys = [this.moto1, this.moto2, this.moto3]
    //this.motoBoyIcon = "C:/Users/lptop/Desktop/Project1/ezxpress/src/baseline_motorcycle_black_18dp.png"
    
  }
  
  
  getUserLocation() {
    
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => 
        {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
         this.reverseAddress(this.lat, this.lng);
        })
    }
    
  }

  
  checkGoogleAddress(localAddress)  {
    
    var geocoder: google.maps.Geocoder = new google.maps.Geocoder; 
    console.log(localAddress)
    geocoder.geocode({address: localAddress}, (results) => {
        this.lat = Number(results[0].geometry.location.lat);
        this.lng = Number(results[0].geometry.location.lat);
        console.log (this.lat)
        
    
    })
  }

  reverseAddress(lat, lng){
    this.mapService.reverseAddress(lat, lng);
    // var geocoder: google.maps.Geocoder = new google.maps.Geocoder; 
    // //alert("teste "+ lat + ' ' + lng)
    // //var latlng = new google.maps.LatLng(31.813506, 35.216292);
    // //var request = { latLng: latlng };
    // var latlng = {lat: 32.050011 , lng: 34.775276};
    // geocoder.geocode({"location": latlng }, (results, status) => {
    //     console.log(results)
     
    //     this.localAddress = results[0].formatted_address
    //     console.log(this.localAddress)
    //     this.addressSubject.next(this.localAddress)
        
     
    
    //   });
  }
    
    



  

  ngOnInit() {
    //this.reverseAddress(lat, lng)
    this.getUserLocation();

  }

}


