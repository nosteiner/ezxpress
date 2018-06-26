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
}