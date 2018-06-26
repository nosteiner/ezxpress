import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from "@agm/core"
//import {} from "@tpes/googlemaps"
import { MapService } from '../map.service';
import { Order } from '../Order';
import { DeliveryComponent } from '../delivery/delivery.component'

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  @ViewChild('searchDest') public searchDestElement: ElementRef;
  
  order: Order 
  constructor(private deliveryComponent: DeliveryComponent, private mapService: MapService, private mapsApiLoader: MapsAPILoader, private ngZone: NgZone) { 
    this.order = this.deliveryComponent.order
    console.log(this.order)
  }

  ngOnInit() {
    this.mapsApiLoader.load().then( () => 
    {
      let autocomplete = new google.maps.places.Autocomplete(this.searchDestElement.nativeElement, {types:["address"]})
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run( () => {
          let place : google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null){
            return
          }
          this.order.destLat = place.geometry.location.lat();
          this.order.destLng = place.geometry.location.lng();
          
            
        })
      })
    })
  }

}
