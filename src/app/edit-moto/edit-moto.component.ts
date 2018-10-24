import { Component, OnInit } from '@angular/core';
import { MotoService } from '../moto.service'
import { MotoBoy } from '../MotoBoy'
import {User} from '../user'
import {UsersService} from '../users.service'

@Component({
  selector: 'app-edit-moto',
  templateUrl: './edit-moto.component.html',
  styleUrls: ['./edit-moto.component.scss']
})
export class EditMotoComponent implements OnInit {

  motoboy : MotoBoy = new MotoBoy();
  user : User = new User();
  password ='' ;
  constructor(private motoService: MotoService, private userService: UsersService) { }


  ngOnInit(){
    this.motoService.singleMotoObservable.subscribe((data) => {
      this.motoboy = data;
      console.log(this.motoboy)
    })
    
    this.motoService.getMoto(1);

    }

    submitEdit(){
    
      if ( this.password == this.user.password ){
        this.motoService.updateMotoBoy(this.motoboy);
        //addd edit password&userName
        this.userService.addNewClient(this.user);
      }
      else{
      alert('password does not match');
      }
    }

}
