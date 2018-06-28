import { Component, OnInit } from '@angular/core';
import { MotoService } from '../moto.service'
import { MotoBoy } from '../MotoBoy'

@Component({
  selector: 'add-motoboy',
  templateUrl: './add-motoboy.component.html',
  styleUrls: ['./add-motoboy.component.css']
})
export class AddMotoboyComponent implements OnInit {
  selectPhoto = "";
  motoboy : MotoBoy = new MotoBoy();
  constructor(private motoService: MotoService) { }

  onPhotofile(event) {
    
    this.selectPhoto = event.target.files[0]
    //this.motoService.uploadPhoto(this.selectPhoto)

  }

  submitMotoBoy() {
    
    this.motoboy.photo = this.selectPhoto;
    
    this.motoService.addMotoBoy(this.motoboy);

  }

  ngOnInit() {
  }

}
