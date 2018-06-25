import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.component.html',
  styleUrls: ['./newclient.component.css']
})
export class NewclientComponent implements OnInit {

  newClient: Customer = new Customer();
  constructor(private customerService: CustomerService) { }

  submitNewClient(){
    console.log("kkkgfgfgdfgfd" + this.newClient);
    this.customerService.addNewClient(this.newClient)
  }

  ngOnInit() {
  }

}
