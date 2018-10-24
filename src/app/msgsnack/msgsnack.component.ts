import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-msgsnack',
  templateUrl: './msgsnack.component.html',
  styleUrls: ['./msgsnack.component.scss']
})
export class MsgsnackComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.openFromComponent(MsgsnackComponent, {
      duration: 500,
    });
  }

  ngOnInit() {
  }

}
