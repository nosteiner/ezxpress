import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MotoBoy } from '../MotoBoy';
import { Subject, Observable } from 'rxjs';



import { MotoService } from '../moto.service';
import { Order } from '../Order';
import { LatLng } from '@agm/core';




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
  origin=  { lat :0, lng: 0}
  destination=  { lat : 0, lng: 0}
  travelMode = "WALKING"
  
  constructor(private motoService: MotoService) {  
      
    this.motoService.getAllMoto()
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

 
    
  
  ngOnInit() {
    this.getUserLocation();
  
    setInterval( () => {
      
      if (this.order.latitudeOriginAddress != undefined && (this.order.latitudeDestAddress != undefined)) {
       this.origin = { lat: this.order.latitudeOriginAddress, lng: this.order.longitudeOriginAddress }    
       this.destination = { lat: this.order.latitudeDestAddress, lng: this.order.longitudeDestAddress }
      
      }
      let inc = 0.0005
      this.motoBoys[0].latitude +=  inc
      this.motoBoys[0].longitude += inc
      this.motoBoys[1].latitude -= inc/2;
      this.motoBoys[1].longitude += inc/2;
    }, 4000 )
  }

}