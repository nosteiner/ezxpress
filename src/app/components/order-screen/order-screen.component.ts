import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Order } from '../../Order';
import { OrdersService} from '../../orders.service';
import { AuthService } from '../../auth.service';

export interface DialogData {
 order: Order;
}

@Component({
  selector: 'app-order-screen',
  templateUrl: './order-screen.component.html',
  styleUrls: ['./order-screen.component.scss']
})
export class OrderScreenComponent implements OnInit {
  //@Output() closeOrder : EventEmitter<any> = new EventEmitter();
  currentUser;
  userType: string;
  showButton : boolean = true;
  order : Order;
  constructor(private authService: AuthService, private ordersService: OrdersService, public dialogRef: MatDialogRef<OrderScreenComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: DialogData) {
    
    this.order = this.dialogData.order
  }

  ngOnInit() {
    console.log(this.order)
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
    this.ordersService.updateOrderStatus(this.order,this.order.orderId, newStatus);
    // if (newStatus == 4) {
    //   setTimeout(function(){ this.dialogRef.close(); }, 3000);
    // }
  }

}
