import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import {User} from '../user'
import {UsersService} from '../users.service'

@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.component.html',
  styleUrls: ['./newclient.component.css']
})
export class NewclientComponent implements OnInit {
  user : User = new User();
  newClient: Customer = new Customer();
  constructor(private customerService: CustomerService, private userService: UsersService) { }

  submitNewClient(){
    console.log("kkkgfgfgdfgfd" + this.newClient);
    this.customerService.addNewClient(this.newClient)
    this.userService.addNewClient(this.user);
  }

  ngOnInit() {
  }

}
