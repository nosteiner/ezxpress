import { Component, OnInit } from '@angular/core';
import { MotoService } from '../moto.service';
import { MotoBoy } from '../MotoBoy';

@Component({
  selector: 'app-moto-share-live-location',
  templateUrl: './moto-share-live-location.component.html',
  styleUrls: ['./moto-share-live-location.component.css']
})
export class MotoShareLiveLocationComponent implements OnInit {

  currentMotoId: string;
 
  constructor(private motoService: MotoService, ) { }

  ngOnInit() {
    // this.motoService.singleMotoObservable.subscribe((data) => {
    //   this.currentMoto = data;
    //   console.log(this.currentMoto)
    // })
  }

  submit() {
    this.motoService.shareLiveLocation(this.currentMotoId)
  }

}
