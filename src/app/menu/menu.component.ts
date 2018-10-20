import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  userType: string;
  currentUser: User = new User
  constructor (private authService : AuthService) { }

  ngOnInit() {
    console.log("menu")
    this.currentUser = this.authService.currentUser;
    this.authService.authUpdated.subscribe((user)=>{
      this.currentUser = user
      this.userType = this.authService.userType
      if(user === null){
        this.userType = null;
      }
      console.log(this.currentUser)
      console.log(this.userType)
    })
  }
  }

