import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { User } from './user';


@Injectable()
export class AuthService {

  user = new User;
  public token : string;
  public msgUpdated : Observable<string>;
  public msgSubject: Subject<string> = new Subject<string>();
  public authUpdated : Observable<User>;
  public authSubject: Subject<User> = new Subject<User>();
  constructor(private http: HttpClient, private router: Router) {
     
    this.msgUpdated = this.msgSubject.asObservable();
    this.authUpdated = this.authSubject.asObservable();
    
   }

   

  login(user) {
    this.http.post<any>('/login',user).subscribe ( result => { 
     
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
      this.http.get<User>('/userDetails').subscribe( data => {
      this.authSubject.next(data)
     })
  }
    
  logoff() {
    localStorage.removeItem('token')
    this.authSubject.next(this.user)
  }

    


  
  ngOnInit() {
    

  }

}