import { Component, OnInit } from '@angular/core';
import { Client } from '../Client';
import { EzxpressService } from '../ezxpress.service';

@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.component.html',
  styleUrls: ['./newclient.component.css']
})
export class NewclientComponent implements OnInit {
  newClient: Client = new Client();
  constructor(private ezxpressService: EzxpressService) { }

  submitNewClient(client){
    this.ezxpressService.addNewClient(client)
  }

  ngOnInit() {
  }

}
