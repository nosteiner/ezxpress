import { Injectable } from '@angular/core';
import { MotoService } from './moto.service'
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  newUser = new User();
  customers
  currentUser: User = new User();


  public singleUserObservable: Observable<User>;
  private singleUserSubject: Subject<User> = new Subject<User>();

  constructor(private http: HttpClient,private router: Router) { }


  Login(userName, password) {
    this.http.post<User>('/login', { username: userName, password: password }).subscribe((data) => {
      console.log(data)
      if (data.userName === userName) {
        console.log('sucsses')
        this.router.navigate(['/'])        
      } else {
        alert('user name or password  is not correct, Please try again')
        this.router.navigate(['./error.html'])
      }
    })
  }

  getCustomers()  {
    this.http.get<User>('usersApi/').subscribe(data => {
    this.customers = data;
     })
  }

  getCustomer(id) {
    this.http.get<User>('usersApi/' + id).subscribe(data => {
      this.currentUser = data[0];
      this.singleUserSubject.next(data[0])
      console.log(this.currentUser)
      console.log("a")
     })
  }

  addNewClient(newUser : User){
    this.http.post<User>('usersApi/add',newUser).subscribe(data => {
      this.currentUser = data[0];
      this.singleUserSubject.next(data[0])
      console.log(newUser)
      console.log("a")
     })
    
  }

  deleteCustomer(currentUser) {
    console.log("inside delete")
    let id = currentUser.customerId
    currentUser.active =false ;
    this.http.put<User>('usersApi/delete/' + id, { customer: currentUser }).subscribe((data) => {
      //update motoboys array
      this.currentUser = data;
      this.singleUserSubject.next(data);
     
    })
  }
}
