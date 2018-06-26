import { Injectable } from '@angular/core';
import { Order } from './Order';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  allOrders: Array<Order> = [];
  allOrdersSbject: Subject<Order[]> = new Subject<Order[]>();
  allOrdersObservable: Observable<Order[]>;

  constructor(private http: HttpClient) {
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
  
  addNewOrder(order){
    console.log("inside Add")
    this.http.post<Order>('ordersApi/add',order).subscribe((data) => {
      this.allOrders.push(order);
      
    })
  }
  // addNewOrder(newOrder: Order): void{
  //   this.http.post<Order>(this.OrdersServiceUrl+'/add',{order: newOrder}).subscribe(() => {
  //    this.allOrders.push(newOrder);
  //   })
  // }

  

  getOrderById(id: number): void{
    this.http.get<Order>(this.OrdersServiceUrl + `/${id}`).subscribe((order) => {
      // this.selectedOrder = order;
      // this.selectedOrderSubject.next(order)
    });
  }

  updateOrder(order, motoboy) {
    let id = order.orderId
    this.http.put<Order>('ordersApi/update/' + id, { order: order }).subscribe((data) => {
      this.getAllOrders();
      
      //update motoboys array
      // this.currentMotoBoy = data;
      // this.singleMotoSubject.next(data);
    })
  }
  assignToOrder(order, motoBoy) {
    if (order.motoboy == null) {
      order.motoboy = motoBoy
      order.status = 2;
      console.log(order+"order")
      this.updateOrder(order, motoBoy);
    
      //Needs to be define 
      //sendNotificationToclient(order){}
    }
  }
  
  cancelAssignToOrder(order) {
    order.motoboy = null;
    order.status = 1;
    //Needs to be define 
    //sendNotificationToclient(order){}
  }
}