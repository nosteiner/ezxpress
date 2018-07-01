import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Order } from '../Order';

@Component({
  selector: 'app-orderdelivered',
  templateUrl: './orderdelivered.component.html',
  styleUrls: ['./orderdelivered.component.css']
})
export class OrderdeliveredComponent implements OnInit {
  order : Order;
  constructor(private ordersService: OrdersService) { }

  viewFormConfirmation( order: Order){
    this.order = order;

  }
  confirmDelivered(order: Order){


  }

  ngOnInit() {
  }

}
