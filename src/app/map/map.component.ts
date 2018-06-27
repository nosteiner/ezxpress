import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('mapDiv') mapDiv: ElementRef;
  public addressUpdated : Observable<any>;
  public addressSubject: Subject<any>;
  map: google.maps.Map;

  latLng :  {lat : number, lng: number}
  lat: number //= 51.678418;
  lng: number //= 7.809007;
  // moto1 = new MotoBoy();
  // moto2 = new MotoBoy();
  // moto3 = new MotoBoy();
  motoBoys: Array<MotoBoy>
  motoBoyIcon: string;
  localAddress :string;
  
  constructor(private mapService: MapService) {  

    
    // this.moto1.latitude = 32.051663;
    // this.moto1.longitude = 34.765952;
    
    // this.moto2.latitude = 32.051750;
    // this.moto2.longitude = 34.768724;
    
    // this.moto3.latitude = 32.048731;
    // this.moto3.longitude = 34.763552;
    // this.motoBoys = [this.moto1, this.moto2, this.moto3]
    
    this.mapService.latLngUpdated.subscribe( data => {
      this.lat = data.lat;
      this.lng = data.lng
    })
    
  }
  
  
  getUserLocation() {
  
      

    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => 
        {
        
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
         this.mapService.reverseAddress(this.lat, this.lng);
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
    
  }
    
    
  refreshsubmit(){
    this.lat = 32.050340;
    this.lng = 34.766323;
  }

  
  

  ngOnInit() {
    this.getUserLocation();
    // this.mapService.getCurrPosition();
    // debugger
    this.mapService.latLngUpdated.subscribe( data => {
     
      this.lat = data.lat;
      this.lng = data.lng
    })

    setInterval( () => {
     
      let inc = 0.001
      this.moto1.latitude +=  inc
      this.moto1.longitude += inc
    }, 4000 )
  }

}


