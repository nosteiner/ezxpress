import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Order } from '../Order';
import { OrdersService} from '../orders.service';
import { AuthService } from '../auth.service';

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
  active: boolean;
}

@Component({
  selector: 'app-order-screen',
  templateUrl: './order-screen.component.html',
  styleUrls: ['./order-screen.component.css']
})
export class OrderScreenComponent implements OnInit {

  currentUser;
  userType: string;
  showButton : boolean = true;
  order = new Order();
  constructor(private authService: AuthService, private ordersService: OrdersService, public dialogRef: MatDialogRef<OrderScreenComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.order = data;
  }

  
   

  ngOnInit() {
    if (this.order.orderId > 0){
      this.showButton = false;
    }
      this.currentUser = this.authService.currentUser;
      this.userType = this.authService.userType;
      this.authService.authUpdated.subscribe((user)=>{
        this.currentUser = user;
        console.log(this.currentUser)
        this.userType = this.authService.userType;
        console.log(this.userType )
      })
    
  }

  close() {
    this.dialogRef.close();
  }

  handleChangeStatus(newStatus) {
    this.ordersService.updateStatus(this.order, newStatus, this.currentUser);
  }

}
