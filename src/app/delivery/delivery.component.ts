import { Component, OnInit, ViewChild, ElementRef, NgZone} from '@angular/core';
import { Order } from '../Order';
import { MaprouteComponent } from '../maproute/maproute.component'
import { MapsAPILoader } from "@agm/core"
import { OrdersService } from '../orders.service';
import { MatDialog } from '@angular/material';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';
import { MotoService } from '../moto.service';



@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  @ViewChild('search') public searchElement: ElementRef;
  @ViewChild(MaprouteComponent) mapRoute: MaprouteComponent; 

localAddress : string

  order: Order;
  
  constructor(private orderService : OrdersService, private motoService: MotoService, 
     private mapsApiLoader: MapsAPILoader, private ngZone: NgZone,
     public dialog: MatDialog)
  { 
        
    this.order = new Order();

    this.motoService.addressUpdated.subscribe( (data) => {
      this.order.localAddress = data.localAddress;
      this.order.latitudeOriginAddress = data.lat;
      this.order.longitudeOriginAddress = data.lng;
      

      })
    
       
    
  }

  setValue(value){
    this.order.deliveryType = value;
  }

  calculateRate(){
      
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
        
        //this.mapRoute.showRoutes(result)
    }) 
  }

  confirmOrder(){
    
    this.order.orderDate = new Date();
    
   
    let dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '500px'
     
    })

    dialogRef.afterClosed().subscribe( result => {
      this.motoService.getClosesMoto(this.order.latitudeOriginAddress,this.order.longitudeOriginAddress)
      
    });

        
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
        console.log(place)
        this.order.localAddress = place.formatted_address
        
        //this.motoService.latLngSubject.next({lat: place.geometry.location.lat(), lng:place.geometry.location.lng()} )
        this.order.latitudeOriginAddress = place.geometry.location.lat();
        this.order.longitudeOriginAddress = place.geometry.location.lng();
        
          
      })
    })
  })
    
  }   


}
