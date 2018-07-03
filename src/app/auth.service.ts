import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { User } from './user';
import { CustomerService } from './customer.service';
import { MotoService } from './moto.service';


@Injectable()
export class AuthService {

  userType: string;
  currentUser;
  user = new User;
  public token: string;
  public msgUpdated: Observable<string>;
  public msgSubject: Subject<string> = new Subject<string>();
  public authUpdated: Observable<User>;
  public authSubject: Subject<User> = new Subject<User>();
  constructor(private http: HttpClient, private router: Router, private customerService: CustomerService, private motoService: MotoService) {

    this.msgUpdated = this.msgSubject.asObservable();
    this.authUpdated = this.authSubject.asObservable();

  }



  login(user) {
    this.http.post<any>('/login', user).subscribe(result => {

      localStorage.setItem('token', result.token)
      this.isLoggedIn();
      this.router.navigate([''])
    },
      (err) => {

        this.msgSubject.next("Login Invalid")
      }
    );
  }

  isLoggedIn() {
    this.http.get<User>('/userDetails').subscribe(data => {
      this.setUser(data);
      this.authSubject.next(data)
    })
  }

  logoff() {
    localStorage.removeItem('token')
    this.authSubject.next(this.user)
  }


  setUser(user: User) {
    if (user.motoboyId === null) {
      this.customerService.singleCustomerObservable.subscribe((customer)=>{
        this.currentUser = customer;
        console.log("user set");
      })
      this.customerService.getCustomer(user.customerId);
      this.userType = "customer";
    
    } else {
      this.motoService.singleMotoObservable.subscribe((motoboy)=>{
        this.currentUser = motoboy;
        console.log("user set");
      });
      this.motoService.getMoto(user.motoboyId);
      this.userType = "motoboy";
      
    }
    console.log("user type" + this.userType)
   
  }
  
}
