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
    console.log("inside Add")
    this.http.post<Order>('ordersApi/add',order).subscribe(() => {
      // this.allOrders.push(order);
      this.getAllOrders();
    })
  }
  
  getOrderById(id: number): void{
    this.http.get<Order>(this.OrdersServiceUrl + `/${id}`).subscribe((order) => {
      // this.selectedOrder = order;
      // this.selectedOrderSubject.next(order)
    });
  }

  // updateOrder(order, id) {
  //   console.log(order.statusId)
  //   this.http.put<Order>(`ordersApi/update/${id}`, order).subscribe(() => {
  //     console.log("order was updated"+ id)
  //     this.getAllOrders();
  //   })
  // }

  
  updateOrderStatus(order, id, status) {
    order.status.statusId = status
    console.log(order.status.statusId)
    console.log(order)
    console.log("=============================================")
    this.http.put<Order>(`ordersApi/updateStatus/${id}`, order).subscribe(() => {
      console.log("order was updated"+ id)
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
    //Needs to be define 
    //sendNotificationToclient(order){}
  }

  confirmEmail(order) {
    console.log("send email ........")
    this.http.post('/sendEmail', order).subscribe((data) => {
      
    //this.http.post('uploadSign', this.formData).subscribe((data) => {
      //update motoboys array?
      //this.currentMotoBoy = data;
    })
    this.snackBar.open("Email Sent to the client", " ", {
      duration: 3000,
    });
    this.router.navigate([''])

  // uploadSignature(signFile) {
  //   console.log(signFile)
  //   let sendFile = {sign: signFile }
  //   let orderId = 1
  //   let signFileName = orderId + 'sign.png'
  //   this.formData.append("uploads", signFile, signFileName);
  //   this.http.post('/sendEmail', sendFile).subscribe((data) => {
  //   //this.http.post('uploadSign', this.formData).subscribe((data) => {
  //     //update motoboys array?
  //     //this.currentMotoBoy = data;
  //   })
        
  }
}