import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import {User} from '../user'
import {UsersService} from '../users.service'
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  user : User = new User();
  editedClient: Customer = new Customer();
  password = '' ; 
  constructor(private customerService: CustomerService, private userService: UsersService) { }

  ngOnInit() {
      this.customerService.singleCustomerObservable.subscribe((data) => {
      this.editedClient = data;
      console.log(this.editedClient)
     })
     this.customerService.getCustomer(2);
  }

  submitEdit(){
      this.customerService.addNewClient(this.editedClient)
      this.userService.addNewClient(this.user);
  }

}
