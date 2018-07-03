import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { Order } from '../Order'
import { Observable } from 'rxjs';
import { OrdersService } from '../orders.service'
import { MatTableDataSource } from '@angular/material';
import { MotoBoy } from '../MotoBoy';
import { MotoService } from '../moto.service';
import { AuthService } from '../auth.service';
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
  currentUser;
  openOrders:Array<Order> = new Array<Order>();
  orders: Array<Order> = new Array<Order>();
  dataSource = new MatTableDataSource(this.orders);

  displayedColumns = [];

  
  constructor(private ordersService: OrdersService, private motoService: MotoService, public dialog: MatDialog, private authService: AuthService) {

  }

  ngOnInit() {
    
    // this.dataSource.data === this.order used this way to filter
    this.dataSource.data = this.ordersService.allOrders;
    console.log(this.dataSource.data)
    this.ordersService.getAllOrders();
    this.ordersService.allOrdersObservable.subscribe((data) => {
      this.dataSource.data = data;
      console.log(this.dataSource.data)

      this.currentUser = this.authService.currentUser;
    this.authService.authUpdated.subscribe((user)=>{
      this.currentUser = user
      this.userType = this.authService.userType
    })
  
      this.initColumns();
    })

    //nees to replace with current user
    
  }

  handleAsignToOrder(order) {
    this.ordersService.assignToOrder(order, this.currentUser);
  }

  editOrder(order_id) {
    let order = this.ordersService.findOrder(order_id)
    //let companySelected = this.companyService.findCompany(client.company_id)
    //client.company = companySelected.name;

    let dialogRef = this.dialog.open(OrderScreenComponent, {
      width: '900px',
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
  refresh() {
    this.ordersService.getAllOrders();
  }

  initColumns() {
    if (this.authService.userType === "motoboy") {
      console.log("show moto columns")
      this.displayedColumns = ['orderId', 'customerId', 'customerPhone', 'localAddress', 'destAddress', 'orderDate', 'active', 'actions']
    } else if (this.authService.userType === "customer") {
      console.log("show customer columns")
      this.displayedColumns = ['orderId', 'motoboyName', 'localAddress', 'destAddress', 'orderDate', 'actions']
    }
  }
}
