import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MotoBoy } from './MotoBoy';
import { Observable, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class MotoService {
  
  localAddress : string;
  lat: number //= 51.678418;
  lng: number

  motoBoys: MotoBoy[] = [];
  currentMotoBoy: MotoBoy = new MotoBoy();

  formData: any = new FormData();
  file: File;

  public allMotoObservable: Observable<Array<MotoBoy>>;
  private allMotoSubject: Subject<Array<MotoBoy>> = new Subject<Array<MotoBoy>>();

  public singleMotoObservable: Observable<MotoBoy>;
  private singleMotoSubject: Subject<MotoBoy> = new Subject<MotoBoy>();

  public addressUpdated : Observable<any>;
  public addressSubject: Subject<any>;

  constructor(private http: HttpClient, public snackBar: MatSnackBar) {
    this.singleMotoObservable = this.singleMotoSubject.asObservable();
    this.allMotoObservable = this.allMotoSubject.asObservable();
    this.getAllMoto();
    this.addressSubject = new Subject<any>();
    this.addressUpdated = this.addressSubject.asObservable();
  }

  getAllMoto() {
    this.http.get<Array<MotoBoy>>('motoboysApi/').subscribe(data => {
      this.motoBoys = data
      this.allMotoSubject.next(this.motoBoys)
     })
  }

  getMoto(id) {
    this.http.get<MotoBoy>('motoboysApi/' + id).subscribe(data => {
      this.currentMotoBoy = data[0];
      this.singleMotoSubject.next(data[0])
    })
  }

  shareLiveLocation(id) {
    // this.singleMotoObservable.subscribe(() => {
    //   setInterval(this.getMotoCurrentLocation(), 5000);
    // })
    this.getMoto(id);
  }

  updateMotoBoy(currentMotoBoy) {
    let id = currentMotoBoy.motoboyId
    this.http.put<MotoBoy>('motoboysApi/update/' + id, { motoboy: currentMotoBoy }).subscribe((data) => {
      this.currentMotoBoy = data;
      this.singleMotoSubject.next(data);
    })
  }

  unActivatMotoboy(currentMotoBoy) {
    currentMotoBoy.active = false;
    this.updateMotoBoy(currentMotoBoy);
  }

  getMotoCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.currentMotoBoy.latitude = position.coords.latitude;
        this.currentMotoBoy.longitude = position.coords.longitude;
        this.currentMotoBoy.position = {
          type: 'Point',
          coordinates: [this.currentMotoBoy.longitude, this.currentMotoBoy.latitude]
        }
        this.reverseAddress(this.currentMotoBoy.latitude, this.currentMotoBoy.longitude);
        this.updateMotoBoy(this.currentMotoBoy)
      })
    }
  }

  reverseAddress(lat, lng){
    var geocoder: google.maps.Geocoder = new google.maps.Geocoder; 
    var latlng = {lat: lat , lng: lng};
    geocoder.geocode({"location": latlng }, (results, status) => {
        this.localAddress = results[0].formatted_address
        console.log(this.localAddress)
        this.addressSubject.next({localAddress: this.localAddress, lat: lat, lng: lng})
      });
  }

  addMotoBoy(motoboy) {
    let photo = motoboy.photo;
    motoboy.photo = " ";
    this.http.post<MotoBoy>('motoboysApi/add', motoboy).subscribe((data) => {
      this.currentMotoBoy = data;
      this.currentMotoBoy.userName = motoboy.userName;
      this.currentMotoBoy.password = motoboy.password
      this.uploadPhoto(photo)
      this.snackBar.open("Sigup Succesful", " ", {
        duration: 2000,
      });
      this.singleMotoSubject.next(data)
    })
  }


  getClosesMoto(lat, lng) {
    let count = 0;
    for ( let i=0 ; i < this.motoBoys.length; i++){
      let distance = this.getDistanceFromLatLonInKm(lat,lng,this.motoBoys[i].latitude,this.motoBoys[i].longitude)
      if (distance <= 1){ 
      }
    }
  }

  // Fucntions to Calculate a distance between 2 points =====>
  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
 deg2rad(deg) {
    return deg * (Math.PI/180)
  }

/// ================>

  uploadPhoto(photoFile) {
    let photoFileName = this.currentMotoBoy.motoboyId + '.png'
    this.formData.append("uploads", photoFile, photoFileName);
    this.http.post('uploadPhoto', this.formData).subscribe((data) => {
    })
  }
}
