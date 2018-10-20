import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

currentUser;
userType;
ststusId :number=5 ; 

  constructor( private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUser;
    this.userType = this.authService.userType;
    this.authService.authUpdated.subscribe((user)=>{
      this.currentUser = user;
      console.log(this.currentUser)
      this.userType = this.authService.userType;
      console.log(this.userType )
    })
  }
}
