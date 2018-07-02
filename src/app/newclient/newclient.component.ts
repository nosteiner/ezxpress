import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import {User} from '../user'
import {UsersService} from '../users.service'
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.component.html',
  styleUrls: ['./newclient.component.css']
})
export class NewclientComponent implements OnInit {
 
  user : User = new User();
  newClient: Customer = new Customer();
  hide = true;
 
  // userName: string = '';
  password: string = '';
  categoryValue: number;
  customer: Customer;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  

  matcher = new MyErrorStateMatcher();
  constructor(private customerService: CustomerService, private userService: UsersService) { }

  addNewCustomer(){
    console.log("addNewCustomer" + this.newClient);
    //add only if 2 password is the same
    if ( this.password == this.user.password ){
      this.customerService.addNewClient(this.newClient,this.user);
    }
    else{
    alert('password  does not match');
    }
   
  }

  ngOnInit() {
  }

}
