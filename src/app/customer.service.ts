import { Injectable } from '@angular/core';
import { MotoService } from './moto.service'
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable, Subject } from 'rxjs';
import {MatSnackBar} from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  NewCustomer = new Customer();
  customers
  currentCustomer: Customer = new Customer();


  public singleCustomerObservable: Observable<Customer>;
  private singleCustomerSubject: Subject<Customer> = new Subject<Customer>();

  constructor( private motoService: MotoService, private http: HttpClient, 
    public snackBar: MatSnackBar) {
    this.singleCustomerObservable = this.singleCustomerSubject.asObservable();
  }

  getCustomers()  {
    this.http.get<Customer>('customersApi/').subscribe(data => {
    this.customers = data;
     })
  }

  getCustomer(id) {
    this.http.get<Customer>('customersApi/customer').subscribe(data => {
      this.currentCustomer = data[0];
      this.singleCustomerSubject.next(data[0])
      console.log(this.currentCustomer)
      console.log("a")
     })
  }

  addNewClient(newClient : Customer){
    this.http.post<Customer>('customersApi/add',newClient).subscribe(data => {
      
      this.currentCustomer = data;
      this.currentCustomer.userName = newClient.userName;
      this.currentCustomer.password = newClient.password
     
      this.singleCustomerSubject.next(this.currentCustomer)
      this.snackBar.open("Sigup Succesful", " ", {
        duration: 2000,
      });
      
      
      
     })
    
  }

  
  updateUstomer(currentCustomer) {
    let id = currentCustomer.customerId
    this.http.put<Customer>('customersApi/update/' + id, { customer: currentCustomer }).subscribe((data) => {
      this.currentCustomer = data;
      this.singleCustomerSubject.next(data);
    })
  }

  deleteCustomer(currentCustomer) {
    console.log("inside delete")
    let id = currentCustomer.customerId
    currentCustomer.active =false ;
    this.http.put<Customer>('customersApi/delete/' + id, { customer: currentCustomer }).subscribe((data) => {
      this.currentCustomer = data;
      this.singleCustomerSubject.next(data);
     
    })
  }
  // shareLiveLocation(id) {
  //   this.singleCustomerObservable.subscribe(()=>{
  //     setInterval(this.getMotoCurrentLocation(),5000);
  //   })
  //   this.getMoto(id);
  // }

  

  // putMotoLocation(currentCustomer) {
  //   console.log("d")
  //   let id = currentCustomer.motoboyId
  //   this.http.put<Customer>('motoboysApi/update/' + id, { motoboy: currentCustomer }).subscribe((data) => {
  //     //update motoboys array
  //     this.currentCustomer = data;
  //     this.singleCustomerSubject.next(data);
     
  //   })
  // }

// getMotoCurrentLocation(){
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(position => {
//       this.currentCustomer.latitude = position.coords.latitude;
//       this.currentCustomer.longitude = position.coords.longitude;
//       this.reverseAddress(this.currentCustomer.latitude, this.currentCustomer.longitude);
//       this.putMotoLocation(this.currentCustomer)

//     })
//   }    
// }

  // checkGoogleAddress(localAddress) {
  //   var geocoder: google.maps.Geocoder = new google.maps.Geocoder;
  //   console.log(localAddress)
  //   geocoder.geocode({ address: localAddress }, (results) => {
  //     this.currentCustomer.latitude = Number(results[0].geometry.location.lat);
  //     this.currentCustomer.longitude = Number(results[0].geometry.location.lat);
  //     console.log(this.currentCustomer.latitude)
  //   })
  // }

  reverseAddress(lat, lng) {
    this.motoService.reverseAddress(lat, lng);
  }

}
