import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../customer.service';
import { MotoService } from './../moto.service';
import { Customer } from './../customer';
import { MotoBoy } from './../MotoBoy';

@Component({
  selector: 'app-user-connected',
  templateUrl: './user-connected.component.html',
  styleUrls: ['./user-connected.component.css']
})
export class UserConnectedComponent implements OnInit {

  customer: Customer;
  motoboy: MotoBoy;

  constructor(private customerService: CustomerService, private motoService: MotoService) { 
    
  }

  ngOnInit() {
    
  }

}