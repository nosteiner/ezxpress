import { Component, OnInit } from '@angular/core';
import { Order } from '../Order'
import { Observable } from 'rxjs';
import { OrdersService } from '../orders.service'
import { MatTableDataSource } from '@angular/material';
import { MotoBoy } from '../MotoBoy';
import { MotoService } from '../moto.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  currentMotoBoy: MotoBoy = new MotoBoy();
  orders: Array<Order> = new Array<Order>();
  dataSource = new MatTableDataSource(this.orders);

  displayedColumns = ['orderId', 'customerId', 'motoboyId', 'localAddress', 'destAddress', 'price', 'orderDate', 'active'];

  constructor(private ordersService: OrdersService, private motoService: MotoService) {

  }

  ngOnInit() {
    // this.dataSource.data === this.order used this way to filter
    this.dataSource.data = this.ordersService.allOrders;
    this.ordersService.getAllOrders();
    this.ordersService.allOrdersObservable.subscribe((data) => {
      this.dataSource.data = data;
      console.log(this.dataSource.data)
    })
    this.motoService.singleMotoObservable.subscribe((data) => {
      this.currentMotoBoy = data;
      console.log(this.currentMotoBoy)
    })
  }
  handleAsignToOrder(orderId) {

  }
  applyFilter(filterValue: string) {
    console.log(filterValue)
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}


