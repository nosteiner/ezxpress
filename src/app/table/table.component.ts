import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { Order } from '../Order'
import { Observable } from 'rxjs';
import { OrdersService } from '../orders.service'
import { MatTableDataSource } from '@angular/material';
import { MotoBoy } from '../MotoBoy';
import { MotoService } from '../moto.service';
import { UsersService } from '../users.service';
import { Customer } from '../customer';
import { OrderScreenComponent } from '../order-screen/order-screen.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
userType;
  order: Order;
  currentMotoBoy: MotoBoy = new MotoBoy();
  orders: Array<Order> = new Array<Order>();
  dataSource =  new MatTableDataSource(this.orders);
  
  displayedColumns = [];

  constructor(private ordersService: OrdersService, private motoService: MotoService, public dialog: MatDialog, private userService:UsersService) {
   
  }

  ngOnInit() {
    // this.dataSource.data === this.order used this way to filter
    this.dataSource.data = this.ordersService.allOrders;
    this.ordersService.getAllOrders();
    this.ordersService.allOrdersObservable.subscribe((data) => {
      this.dataSource.data = data;
      console.log(this.dataSource.data)
    })
//this.getUserType();
//this.initColumns();

    //nees to replace with current user
    this.motoService.singleMotoObservable.subscribe((data) => {
      this.currentMotoBoy = data;
      console.log(this.currentMotoBoy)
    })
  }

  handleAsignToOrder(order) {
    this.ordersService.assignToOrder(order,this.currentMotoBoy);
  }

  editOrder(order_id){
    let order = this.ordersService.findOrder(order_id)
    //let companySelected = this.companyService.findCompany(client.company_id)
    //client.company = companySelected.name;

    let dialogRef = this.dialog.open(OrderScreenComponent, {
      width: '600px',
      data: order
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  applyFilter(filterValue: string) {
    console.log(filterValue)
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  refresh(){
    this.ordersService.getAllOrders();
  }

  getUserType(){
    // this.userType = typeof this.userService.currentUser
    this.userType === MotoBoy
    }
  
    initColumns(){
      if(this.userType === MotoBoy){
        this.displayedColumns = ['orderId', 'customerId', 'customerPhone' , 'localAddress', 'destAddress', 'orderDateTime', 'active']
      }else if(this.userType === Customer){
        this.displayedColumns = ['orderId', 'motoboyName' , 'localAddress', 'destAddress', 'orderDateTime']
      }
    }
}
