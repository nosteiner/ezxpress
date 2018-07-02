import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { User } from './user';
//import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  user = new User;
  public token : string;
  public msgUpdated : Observable<string>;
  public msgSubject: Subject<string>;
  constructor(private http: HttpClient, private router: Router) {
    this.msgSubject = new Subject<string>();
    this.msgUpdated = this.msgSubject.asObservable();
    this.token = localStorage.getItem('loginSessId')
   }

   

  login(user) {
    this.http.post<any>('/login',user).subscribe ( result => { 
      console.log(result)
      debugger;
      localStorage.setItem('token', result.token)
      this.router.navigate([''])
    },
      
      (err) => {
        console.log(err)
        this.msgSubject.next("Login Invalid")
      }
    );
  }
    
  isLoggedIn() {
  //let token = localStorage.getItem('loginSessId')
  this.token = JSON.parse(this.token)
  console.log(this.token)
    this.user.token = this.token
    console.log(this.user)

    this.http.get('/userDetails').subscribe( (data) => {
      console.log(data)
    }
  )
    
    // this.http.post('/isloggedin/',this.user).subscribe( result => {
    //     console.log (result) 
    // //  localStorage.setItem('loginSessId', JSON.stringify(result))
    //   this.router.navigate([''])
    // },
      
    //   (err) => this.msgSubject.next("Login Invalid")
    // );

    

  }

 
  
  // public isAuthenticated(): boolean {
  //   //const token = localStorage.getItem('token');
  //   // Check whether the token is expired and return
  //   // true or false
  //   //return !this.jwtHelper.isTokenExpired(this.token);
  // }


  
  ngOnInit() {
    // debugger
    // let exptoken = this.isAuthenticated();
    // console.log(exptoken)
  

  }

}