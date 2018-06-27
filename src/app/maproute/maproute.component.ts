import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MotoBoy } from '../MotoBoy';
import { Subject, Observable } from 'rxjs';

import {} from '@types/google-maps';
import { MapService } from '../map.service';

@Component({
  selector: 'app-maproute',
  templateUrl: './maproute.component.html',
  styleUrls: ['./maproute.component.css']
})
export class MaprouteComponent implements OnInit {
  //@ViewChild('mapDiv') mapDiv: ElementRef;
  //map: google.maps.Map;

  constructor() { }



  showRoutes(result){
    
    var lat = 32.0503025, lng = 34.76668559999996
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var centerMap = new google.maps.LatLng(lat, lng);
    var mapOptions = {
                      zoom:12,
                      center: centerMap
                     }
    var map = new google.maps.Map(document.getElementById('mapDiv') , mapOptions);
    directionsDisplay.setMap(map);
    directionsDisplay.setDirections(result);
  }
  ngOnInit() {
    
  }

}
