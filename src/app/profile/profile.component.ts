import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser;

  rating: number = 3;
  starCount: number = 0;
  color: string = 'yellow';

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser
    this.userService.singleUserObservable.subscribe((user) => {
      this.currentUser = user
    })
  }
}
