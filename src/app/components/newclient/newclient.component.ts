import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { CustomerService } from '../../customer.service';
import {User} from '../../user'
import {UsersService} from '../../users.service'
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { AuthService } from '../../auth.service';

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
  styleUrls: ['./newclient.component.scss']
})
export class NewclientComponent implements OnInit {
  user : User = new User();
  newClient: Customer = new Customer();
  hide = true;
 
  userName: string = '';
  password: string = '';
  categoryValue: number;
  customer: Customer;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  

  matcher = new MyErrorStateMatcher();
  constructor(private customerService: CustomerService, private userService: UsersService, private authService: AuthService) { }

  submitNewClient(){
    console.log("kkkgfgfgdfgfd" + this.newClient);

    if (this.password == this.newClient.password ){
      this.customerService.addNewClient(this.newClient)
      //this.userService.addNewClient(this.user);
     this.customerService.singleCustomerObservable.subscribe( user =>{
      this.authService.login({username: user.userName, password: user.password})
     })
    }
    else{
    alert('password  does not match');
    }
   
  }

  ngOnInit() {
  }

}
