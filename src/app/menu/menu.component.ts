import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: User = new User
  constructor (private authService : AuthService) { }
 

  ngOnInit() {

    this.authService.authUpdated.subscribe((data)=>{
      this.user = data; })
  }
     
  
      
    

  

}
