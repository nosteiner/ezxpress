import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../customer.service';
import { MotoService } from './../moto.service';
import { Customer } from './../customer';
import { MotoBoy } from './../MotoBoy';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-connected',
  templateUrl: './user-connected.component.html',
  styleUrls: ['./user-connected.component.css']
})
export class UserConnectedComponent implements OnInit {

  currentUser;

  constructor(private authService: AuthService) { 
    
  }

  ngOnInit() {
    this.currentUser = this.authService.currentUser;
    this.authService.authUpdated.subscribe((user)=>{
      this.currentUser = user
   
    })
  }
  }

