import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../Order'
import { Observable } from 'rxjs';
import { OrdersService } from '../orders.service'
import { MatTableDataSource } from '@angular/material';
import { MotoBoy } from '../MotoBoy';
import { MotoService } from '../moto.service';
import {Customer} from '../customer'
import { CustomerService } from '../customer.service';
import { stringify } from '@angular/compiler/src/util';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser = new MotoBoy ;
  rating: number = 3;
  starCount: number = 0;
  color: string = 'yellow';


  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser
    this.userService.singleUserObservable.subscribe((user) => {
      this.currentUser = user
    })
  }
}
