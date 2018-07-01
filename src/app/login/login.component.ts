
import { Component, OnInit, Inject} from '@angular/core';
import {MotoService} from '../moto.service'
import {CustomerService} from '../customer.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Customer} from '../customer'
import {MotoBoy} from '../MotoBoy'
//import {SignupComponent} from '../signup/signup.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes ,Router} from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  customer :Customer
  hide = true;
  userName;
  password;
  toogle =0;
  constructor(
    private usersService:UsersService,
    public customerService:CustomerService,
    public dialog: MatDialog,
    private router:Router,
    
  ) { }

  ngOnInit() {
  }
  // openDialog(user) {
  //   console.log(user);
  //   let dialogRef = this.dialog.open(SignupComponent, {
     
  //     data:{user: user}
  //   });
  // }
  login(){
    this.usersService.Login(this.userName,this.password)
  }
  signup(){
    if (this.toogle==1){
      this.toogle=0;
    }
    if (this.toogle==0){
      this.toogle=1;
    }
  }

}