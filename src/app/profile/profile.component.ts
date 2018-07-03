import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser;
userType;
  rating: number = 3;
  starCount: number = 0;
  color: string = 'yellow';

  constructor( private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUser;
    this.authService.authUpdated.subscribe((user)=>{
      this.currentUser = user
      this.userType = this.authService.userType
    })
  }
}
