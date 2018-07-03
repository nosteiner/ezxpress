import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
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
      
      console.log(this.currentUser)
      console.log(this.userType)
    })
  }
  }

