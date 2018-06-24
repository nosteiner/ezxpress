import { Component, OnInit } from '@angular/core';
import { EzxpressService } from '../ezxpress.service'
import { MotoBoy } from '../MotoBoy'

@Component({
  selector: 'add-motoboy',
  templateUrl: './add-motoboy.component.html',
  styleUrls: ['./add-motoboy.component.css']
})
export class AddMotoboyComponent implements OnInit {
  selectPhoto = "";
  motoboy : MotoBoy = new MotoBoy();
  constructor(private ezxpressService: EzxpressService) { }

  onPhotofile(event) {
    console.log(event)
    this.selectPhoto = event.target.files[0]
    

  }

  submitMotoBoy() {
    this.motoboy.photo = this.selectPhoto;
    
    this.ezxpressService.addMotoBoy(this.motoboy);

  }

  ngOnInit() {
  }

}
