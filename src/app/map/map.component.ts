import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MotoBoy } from '../MotoBoy';
import { Subject, Observable } from 'rxjs';

import {} from '@types/google-maps';
import { MapService } from '../map.service';
import { MotoService } from '../moto.service';
import { Order } from '../Order';




@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})



export class MapComponent  {
  @Input() order: Order = new Order;
  
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
  origin: object;
  destination: object;
  
  constructor(private motoService: MotoService) {  
      
    
    this.motoService.allMotoObservable.subscribe( data => {
        this.motoBoys = data
        console.log(data)
    })
    // this.moto1.latitude = 32.051663;
    // this.moto1.longitude = 34.765952;
    
    // this.moto2.latitude = 32.051750;
    // this.moto2.longitude = 34.768724;
    
    // this.moto3.latitude = 32.048731;
    // this.moto3.longitude = 34.763552;
    // this.motoBoys = [this.moto1, this.moto2, this.moto3]
    
    // this.mapService.latLngUpdated.subscribe( data => {
    //   this.lat = data.lat;
    //   this.lng = data.lng
    // })
    
  }
  
  
  getUserLocation() {
  
      
    debugger
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => 
        {
        
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.origin = { lat: this.order.latitudeOriginAddress, lng: this.order.longitudeOriginAddress }    
        //this.destination = { lat: this.order.latitudeDestAddress, lng: this.order.longitudeDestAddress }
         this.motoService.reverseAddress(this.lat, this.lng);
        })
    }
    
  }

  
  // checkGoogleAddress(localAddress)  {
    
  //   var geocoder: google.maps.Geocoder = new google.maps.Geocoder; 
  //   console.log(localAddress)
  //   geocoder.geocode({address: localAddress}, (results) => {
  //       this.lat = Number(results[0].geometry.location.lat);
  //       this.lng = Number(results[0].geometry.location.lat);
  //       console.log (this.lat)
        
    
  //   })
  // }

  
    
  
  ngOnInit() {
    this.getUserLocation();

    
    // this.mapService.getCurrPosition();
    // debugger
    // this.mapService.latLngUpdated.subscribe( data => {
     
    //   this.lat = data.lat;
    //   this.lng = data.lng
    // })

    setInterval( () => {
      console.log(this.order)
      if (this.order.latitudeOriginAddress != undefined) {
       this.origin = { lat: this.order.latitudeOriginAddress, lng: this.order.longitudeOriginAddress }    
       this.destination = { lat: this.order.latitudeDestAddress, lng: this.order.longitudeDestAddress }
      console.log(this.origin)
      console.log(this.destination)
      }
      let inc = 0.0005
      this.motoBoys[0].latitude +=  inc
      this.motoBoys[0].longitude += inc
      this.motoBoys[1].latitude -= inc;
      this.motoBoys[1].longitude += inc;
    }, 4000 )
  }

}