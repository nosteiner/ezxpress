import { Component, OnInit } from '@angular/core';
import { Order } from '../Order'
import { Observable } from 'rxjs';
import {OrdersService} from '../orders.service'
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  orders: Array<Order> = new Array<Order>();
  dataSource =  new MatTableDataSource(this.orders);
  
  displayedColumns = ['orderId', 'customerId', 'motoboyId', 'localAddress', 'destAddress', 'price', 'orderDate', 'active'];

  constructor(private ordersService: OrdersService) {
   
   }

  ngOnInit() {
    // this.dataSource.data === this.order used this way to filter
    this.dataSource.data = this.ordersService.allOrders;
    this.ordersService.getAllOrders();
    this.ordersService.allOrdersObservable.subscribe((data)=>{
      this.dataSource.data = data;
      console.log(this.dataSource.data)
    })
  }

  applyFilter(filterValue: string) {
    console.log(filterValue)
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}


