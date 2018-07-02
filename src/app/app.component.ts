import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'ezXpress';
  auth = Object;
  constructor (private authService : AuthService) {}

  ngOnInit() {
    //this.auth = this.authService.
  }
  
}


