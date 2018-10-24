import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Order } from '../Order';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit { 

  @Input() order: Order;
  @Input() userType: string;
  ngOnInit() {
    console.log("this.order.statusId")
console.log(this.order.statusId)
  }
}
