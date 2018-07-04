import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Order } from '../Order';

@Component({
  selector: 'app-orderdelivered',
  templateUrl: './orderdelivered.component.html',
  styleUrls: ['./orderdelivered.component.css']
})
export class OrderdeliveredComponent implements OnInit {
  @Input() order: any;

  // order : Order;
  // localAddress : string = " Hayesod 4"
  deliveryDate = new Date()

  constructor(private ordersService: OrdersService) {
    
   }

  viewFormConfirmation( order: Order){
    
    this.order.deliveryDate = new Date();

  }
  confirmDelivered(order){
    console.log(order)
    order.statusId = 5;
    this.ordersService.confirmEmail(order)



  }

  ngOnInit() {
    console.log("========= inside orderdelivered ==============")
    console.log(this.order)
    console.log(this.order.customer.firstName)
  }

}
