import { Injectable } from '@angular/core';
import { MotoBoy } from './MotoBoy';
import { Customer } from './customer';
import { Order } from './Order';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EzxpressService {


  motoBoy = []
  client = [];
  order = [] ;
  constructor(private http:HttpClient) { }

  getMotoBoy(){
    return this.motoBoy;
  }

  addMotoBoy(motoboy){
    this.motoBoy.push(motoboy);
    console.log(this.motoBoy);
    
  }


  addNewOrder(order){
    console.log("inside Add")
    this.http.post<Order>('ordersApi/add',order).subscribe((data) => {
      //update  array?
      //this.order = data;
    })
  }
  
}
