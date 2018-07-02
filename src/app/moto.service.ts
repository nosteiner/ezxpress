import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MotoBoy } from './MotoBoy';
import { Observable, Subject } from 'rxjs';

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

  constructor(private http: HttpClient) {
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
      console.log(this.currentMotoBoy)

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
      //update motoboys array
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


  // checkGoogleAddress(localAddress) {
  //   var geocoder: google.maps.Geocoder = new google.maps.Geocoder;
  //   // console.log(localAddress)
  //   geocoder.geocode({ address: localAddress }, (results) => {
  //     this.currentMotoBoy.latitude = Number(results[0].geometry.location.lat);
  //     this.currentMotoBoy.longitude = Number(results[0].geometry.location.lat);
  //     // console.log(this.currentMotoBoy.latitude)
  //   })
  // }

  reverseAddress(lat, lng){
   
    var geocoder: google.maps.Geocoder = new google.maps.Geocoder; 
    var latlng = {lat: lat , lng: lng};
    geocoder.geocode({"location": latlng }, (results, status) => {
        console.log(results)
     
        this.localAddress = results[0].formatted_address
        console.log(this.localAddress)
        this.addressSubject.next({localAddress: this.localAddress, lat: lat, lng: lng})
        
     
    
      });
  }

  addMotoBoy(motoboy) {
    console.log("inside Add")
    let photo = motoboy.photo;
    motoboy.photo = " ";
    this.http.post<MotoBoy>('motoboysApi/add', motoboy).subscribe((data) => {
      //update motoboys array?
      this.currentMotoBoy = data;
      this.uploadPhoto(photo)
    })
  }


  getClosesMoto(lat, lng) {

    this.http.get<Array<MotoBoy>>('motoboysApi/getClosesMoto/' + lat + '/' + lng).subscribe(data => {
      // send SMS to deliveries in data if dat.length > 0
      // console.log(data)
             
    })
  }
     
  uploadPhoto(photoFile) {
    
    let photoFileName = this.currentMotoBoy.motoboyId + '.png'
    this.formData.append("uploads", photoFile, photoFileName);
    this.http.post('uploadPhoto', this.formData).subscribe((data) => {
      //update motoboys array?
      //this.currentMotoBoy = data;
    })
    
  }
}
