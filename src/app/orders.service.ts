import { Injectable } from '@angular/core';
import { Order } from './Order';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  formData: any = new FormData();
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

  updateOrder(order) {
    let id = order.orderId
    console.log("-------------------------------------")
    console.log(order)
    this.http.put<Order>('ordersApi/update/' + id, { order: order }).subscribe(() => {
      this.getAllOrders();
      //update motoboys array
      // this.currentMotoBoy = data;
      // this.singleMotoSubject.next(data);
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

  assignToOrder(order, motoBoy) {
   
      order.motoboyId = motoBoy.motoboyId
      order.status = 2;
      console.log("this is the order:")
      console.log(order)
      this.updateOrder(order)
      // this.sendSmsToCustomer(order);----------------------------------SMS----------------------
      //Needs to be define 
    
    
  }
  
  cancelAssignToOrder(order) {
    order.motoboy = null;
    order.status = 1;
    //Needs to be define 
    //sendNotificationToclient(order){}
  }


  uploadSignature(signFile) {
    console.log(signFile)
    let sendFile = {sign: signFile }
    let orderId = 1
    let signFileName = orderId + 'sign.png'
    this.formData.append("uploads", signFile, signFileName);
    this.http.post('/sendEmail', sendFile).subscribe((data) => {
    //this.http.post('uploadSign', this.formData).subscribe((data) => {
      //update motoboys array?
      //this.currentMotoBoy = data;
    })
        
  }
}