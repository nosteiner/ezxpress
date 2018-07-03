import { Component, OnInit, Inject ,Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Order } from '../Order';
import { OrdersService} from '../orders.service';

export interface DialogData {
  orderId: number;
  customerId: number;
  motoboyId: number;
  orderDate: Date;
  localAddress: string;
  latitudeOriginAddress: number;
  longitudeOriginAddress: number;
  destAddress:string;
  latitudeDestAddress:number;
  longitudeDestAddress: number;
  price: number;
  collectDate: Date;
  deliveryDate: Date;
  contactDestination: string;
  phoneDestination:string;
  phoneNumber: string;
  deliveryType: string;
  status: string;
  statusId: number;
  active: boolean;
}

@Component({
  selector: 'app-order-screen',
  templateUrl: './order-screen.component.html',
  styleUrls: ['./order-screen.component.css']
})
export class OrderScreenComponent implements OnInit {

  showButton : boolean = true;
  order = new Order();
  statusId : number ;
  constructor(private orderService: OrdersService, public dialogRef: MatDialogRef<OrderScreenComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.order = data;
    this.statusId = this.order.statusId;
  }

  ngOnInit() {
    console.log(this.statusId)
    console.log(this.order.statusId)
    if (this.order.orderId > 0)
      this.showButton = false;
  }

  close() {
    this.dialogRef.close();
  }

}
