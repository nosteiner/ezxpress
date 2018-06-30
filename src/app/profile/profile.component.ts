import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../Order'
import { Observable } from 'rxjs';
import { OrdersService } from '../orders.service'
import { MatTableDataSource } from '@angular/material';
import { MotoBoy } from '../MotoBoy';
import { MotoService } from '../moto.service';
import {Customer} from '../customer'
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  currentUser

  rating: number = 3;
  starCount: number = 0;
  color: string = 'yellow';
  
  constructor(private customerService:CustomerService, private motoService: MotoService) { }

  ngOnInit(){
    this.motoService.singleMotoObservable.subscribe((data) => {
      this.currentUser = data;
      console.log(this.currentUser)
      this.rating= this.currentUser.rate
    })
    
    this.motoService.getMoto(1);

    }

}
