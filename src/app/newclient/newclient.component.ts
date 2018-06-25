import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { EzxpressService } from '../ezxpress.service';

@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.component.html',
  styleUrls: ['./newclient.component.css']
})
export class NewclientComponent implements OnInit {
  newClient: Customer = new Customer();
  constructor(private ezxpressService: EzxpressService) { }

  submitNewClient(newClient){
    this.ezxpressService.addNewClient(newClient)
  }

  ngOnInit() {
  }

}
