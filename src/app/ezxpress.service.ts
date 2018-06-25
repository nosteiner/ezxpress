import { Injectable } from '@angular/core';
import { MotoBoy } from './MotoBoy';
import { Customer } from './customer';
import { Order } from './Order';


@Injectable({
  providedIn: 'root'
})
export class EzxpressService {

  motoBoy = []
  client = [];

  constructor() { }

  getMotoBoy(){
    return this.motoBoy;
  }

  addMotoBoy(motoboy){
    this.motoBoy.push(motoboy);
    console.log(this.motoBoy);
    
  }

  addNewClient(client){
    this.client.push(client)
  }

  
}
