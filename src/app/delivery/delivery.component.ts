import { Component, OnInit, ViewChild, ElementRef, NgZone, Output, EventEmitter } from '@angular/core';
import { Order } from '../Order';
import { MaprouteComponent } from '../maproute/maproute.component'
import { MapService } from '../map.service';
import { EzxpressService } from '../ezxpress.service';
import { MapsAPILoader } from "@agm/core"



@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  @ViewChild('search') public searchElement: ElementRef;
  @ViewChild(MaprouteComponent) mapRoute: MaprouteComponent; 

localAddress : string
 
//@Input() address: string;


//@Output() showRoutes: EventEmitter<any> = new EventEmitter();
  order: Order;
  // userSettings : Object;
  constructor(private ezxpressService : EzxpressService, private mapService: MapService, private mapsApiLoader: MapsAPILoader, private ngZone: NgZone) { 
        
    this.order = new Order();
    this.mapService.addressUpdated.subscribe( (data) => {
      this.order.localAddress = data
      
      })
    

    
  }

  setValue(value){
    this.order.deliveryType = value;
  }

  calculateRate(){
    
    console.log(this.order)
    var localAddress = new google.maps.LatLng(this.order.latitudeOriginAddress,this.order.longitudeDestAddress)
    var destAddress = new google.maps.LatLng(this.order.latitudeDestAddress, this.order.longitudeDestAddress)
    var travelway = google.maps.TravelMode.DRIVING
    var directionsService = new google.maps.DirectionsService();
  
    var directionsRequest = {
      origin: localAddress,
      destination: destAddress,
      travelMode: travelway, 
      avoidHighways: true
    }
    directionsService.route(directionsRequest, (result, status) => {
      //if (status === 'OK') 
        
        var dist = result.routes[0].legs[0].distance.value
        
        if (this.order.deliveryType == "envelope") 
           var multPrice = 0.005
        else
           var multPrice = 0.007
        this.order.price = (dist) * multPrice;
        console.log(this.order.price)
        this.mapRoute.showRoutes(result)
    })
  }

  confirmOrder(){
    this.order.deliveryDate = new Date();
    
    this.ezxpressService.addNewOrder(this.order)

        
  }

  

  ngOnInit() {

    this.mapsApiLoader.load().then( () => 
  {
    let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, {types:["address"]})
    autocomplete.addListener("place_changed", () => {
      this.ngZone.run( () => {
        let place : google.maps.places.PlaceResult = autocomplete.getPlace();
        if (place.geometry === undefined || place.geometry === null){
          return
        }
        this.mapService.latLngSubject.next({lat: place.geometry.location.lat(), lng:place.geometry.location.lng()} )
        this.order.latitudeOriginAddress = place.geometry.location.lat();
        this.order.longitudeOriginAddress = place.geometry.location.lng();
        
          
      })
    })
  })
    
  }   


}
