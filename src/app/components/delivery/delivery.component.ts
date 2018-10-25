import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Order } from '../../Order';
import { MaprouteComponent } from '../maproute/maproute.component'
import { MapsAPILoader } from "@agm/core"
import { OrdersService } from '../../orders.service';
import { MatDialog } from '@angular/material';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';
import { MotoService } from '../../moto.service';
import { UsersService } from '../../users.service';
import { AuthService } from '../../auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import * as moment from 'moment';


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {
  @ViewChild('search') public searchElement: ElementRef;
  @ViewChild(MaprouteComponent) mapRoute: MaprouteComponent;

  localAddress: string
  dist: number;
  order: Order;
  calcOrder: Boolean = false;
  color = 'primary';
  mode = 'determinate';
  value = 50;

  constructor(private orderService: OrdersService, private motoService: MotoService,
    private mapsApiLoader: MapsAPILoader, private ngZone: NgZone,
    public dialog: MatDialog, private authService: AuthService) {

    this.order = new Order();

    this.motoService.addressUpdated.subscribe((data) => {
      this.order.localAddress = data.localAddress;
      this.order.latitudeOriginAddress = data.lat;
      this.order.longitudeOriginAddress = data.lng;
    })
  }

  setValue(value) {
    this.order.deliveryType = value;
  }

  calculateRate() {
    this.calcOrder = true;
    var localAddress = new google.maps.LatLng(this.order.latitudeOriginAddress, this.order.longitudeDestAddress)
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
       this.dist = result.routes[0].legs[0].distance.value / 1000
      if (this.order.deliveryType == "envelope")
        var multPrice = 5
      else
        var multPrice = 7
      if (this.dist <= 4) this.order.price = 20
      else
        this.order.price = (this.dist) * multPrice;
      this.calcOrder = false;
    })
  }

  confirmOrder() {
    this.order.orderDate = new Date();
    this.order.statusId = 1
    this.orderService.addNewOrder(this.order)

    let dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '500px'
    })

    dialogRef.afterClosed().subscribe(result => {
      this.motoService.getClosesMoto(this.order.latitudeOriginAddress, this.order.longitudeOriginAddress)
    });
  }

  ngOnInit() {
    this.mapsApiLoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types: ["address"] })
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return
          }
          console.log(place)
          this.order.localAddress = place.formatted_address
          this.order.latitudeOriginAddress = place.geometry.location.lat();
          this.order.longitudeOriginAddress = place.geometry.location.lng();
        })
      })
    })
  }
}