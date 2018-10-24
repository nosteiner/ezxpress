import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MotoBoy } from '../MotoBoy';
import { Subject, Observable } from 'rxjs';
import { MotoService } from '../moto.service';
import { Order } from '../Order';
import { LatLng } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent {
  @Input() order: Order = new Order;

  @ViewChild('mapDiv') mapDiv: ElementRef;
  public addressUpdated: Observable<any>;
  public addressSubject: Subject<any>;
  map: google.maps.Map;
  latLng: { lat: number, lng: number }
  lat: number //= 51.678418;
  lng: number //= 7.809007;

  // motoBoys: Array<MotoBoy>
  motoBoyIcon: string;
  localAddress: string;
  origin = { lat: 0, lng: 0 }
  destination = { lat: 0, lng: 0 }
  travelMode = "WALKING"

  constructor(private motoService: MotoService) {

  }

  getUserLocation() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
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
    setInterval(() => {
      if (this.order.latitudeOriginAddress != undefined && (this.order.latitudeDestAddress != undefined)) {
        this.origin = { lat: this.order.latitudeOriginAddress, lng: this.order.longitudeOriginAddress }
        this.destination = { lat: this.order.latitudeDestAddress, lng: this.order.longitudeDestAddress }
      }
    }, 4000)
  }
}