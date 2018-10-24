import { Injectable } from '@angular/core';
import { Order } from './Order';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  formData: any = new FormData();
  allOrders: Array<Order> = [];
  allOrdersSbject: Subject<Order[]> = new Subject<Order[]>();
  allOrdersObservable: Observable<Order[]>;

  constructor(private http: HttpClient, public snackBar: MatSnackBar, private router: Router) {
    this.allOrdersObservable = this.allOrdersSbject.asObservable();
    this.getAllOrders()
   }

   private OrdersServiceUrl = '/ordersApi'

   getAllOrders(): void {
    this.http.get<Order[]>(this.OrdersServiceUrl).subscribe((orders) => {
      this.allOrders = orders;
      console.log(orders)
      this.allOrdersSbject.next(orders)
    })
  }
  
  findOrder(order_id) {  
    return this.allOrders.find( order => order.orderId == order_id )
  }
  
  addNewOrder(order){
 
    this.http.post<Order>('ordersApi/add',order).subscribe(() => {
      console.log("added succesfuly")
      this.getAllOrders();
    })
  }
  
  getOrderById(id: number): void{
    this.http.get<Order>(this.OrdersServiceUrl + `/${id}`).subscribe((order) => {
    });
  }
  
  updateOrderStatus(order, id, status) {
    order.statusId = status
    this.http.put<Order>(`ordersApi/updateStatus/${id}`, order).subscribe(() => {
      if(status == 888){
        this.confirmEmail(order)
      }
      this.getAllOrders();
    })
  }
  sendSmsToCustomer(order: Order){
     this.http.post('/send', {
      from: 'Acme Inc',
      to: order.phoneNumber,
      text: 'motoBoy on the way!'
    }).subscribe((data) => {
      console.log(data)
    })
  }

  cancelAssignToOrder(order) {
    order.motoboy = null;
    order.status = 1;
  }

  confirmEmail(order) {
    console.log("send email ........")
    this.http.post('/sendEmail', order).subscribe((data) => {
      console.log(data)
      this.snackBar.open("Email Sent to the client", " ", {
        duration: 3000,
      });
      this.router.navigate([''])
    })      
  }
}