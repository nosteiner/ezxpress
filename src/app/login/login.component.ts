
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
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
 scroll
  loginParms : Object;
  tokenid : Object = {token: ''}
  msg : string
  customer :Customer
  hide = true;
  userName = '';
  password = '';
  toogle =0;
  constructor(
    private usersService:UsersService,
    public customerService:CustomerService,
    public dialog: MatDialog,
    private router:Router,
    private authService : AuthService
  ) { }

  ngOnInit() {

  
    this.authService.msgUpdated.subscribe((data)=>{
      this.msg = data; })
  }

  login(){

    this.loginParms = {username: this.userName, password: this.password}
    this.authService.login(this.loginParms)
    
  }
  signup(){

    if (this.toogle==1){
      this.toogle=0;
    }
    if (this.toogle==0){
      this.toogle=1;
    }
    this.scroll = setInterval(function(){ window.scrollBy(0,10); }, 20);
  }

  clear(){
    clearInterval(this.scroll);
  }
	
 
}