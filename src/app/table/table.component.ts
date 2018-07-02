import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { Order } from '../Order'
import { Observable } from 'rxjs';
import { OrdersService } from '../orders.service'
import { MatTableDataSource } from '@angular/material';
import { MotoBoy } from '../MotoBoy';
import { MotoService } from '../moto.service';
import { OrderScreenComponent } from '../order-screen/order-screen.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  order: Order;
  currentMotoBoy: MotoBoy = new MotoBoy();
  orders: Array<Order> = new Array<Order>();
  dataSource =  new MatTableDataSource(this.orders);
  
  displayedColumns = ['orderId', 'customerId', 'motoboyId', 'localAddress', 'destAddress', 'price', 'orderDate', 'status', 'active', 'actions'];

  constructor(private ordersService: OrdersService, private motoService: MotoService, public dialog: MatDialog) {
   
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
}
