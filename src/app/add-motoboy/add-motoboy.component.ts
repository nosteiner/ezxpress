import { Component, OnInit } from '@angular/core';
import { MotoService } from '../moto.service'
import { MotoBoy } from '../MotoBoy'
import {User} from '../user'
import {UsersService} from '../users.service'
import { AuthService } from '../auth.service';

@Component({
  selector: 'add-motoboy',
  templateUrl: './add-motoboy.component.html',
  styleUrls: ['./add-motoboy.component.css']
})
export class AddMotoboyComponent implements OnInit {
  selectPhoto = "";
  motoboy : MotoBoy = new MotoBoy();
  user : User = new User();
       
  constructor(private motoService: MotoService, private userService: UsersService, private authService: AuthService) { }

  onPhotofile(event) {
    this.selectPhoto = event.target.files[0]
    //this.motoService.uploadPhoto(this.selectPhoto)
  }

  submitMotoBoy() {
    this.motoboy.photo = this.selectPhoto;
    this.motoService.addMotoBoy(this.motoboy);
    this.motoService.singleMotoObservable.subscribe(motoboy => {
      this.authService.login({username: motoboy.userName, password: motoboy.password})
    })
  }

  ngOnInit() {
  }

}
