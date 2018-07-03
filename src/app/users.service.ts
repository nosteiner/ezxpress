import { Injectable } from '@angular/core';
import { MotoService } from './moto.service'
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Customer } from './customer';
import { MotoBoy } from './MotoBoy';
import { CustomerService } from './customer.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  newUser = new User();
  customers
  currentUser;


  public singleUserObservable: Observable<User>;
  private singleUserSubject: Subject<User> = new Subject<User>();

  constructor(private http: HttpClient, private router: Router, private customerService: CustomerService, private motoService: MotoService) {
    this.singleUserObservable = this.singleUserSubject.asObservable()
  }


  // Login(userName, password) {

  //   this.http.post<User>('/login', { username: userName, password: password }).subscribe((user) => {
  //     if (user.userName === userName) {
  //       console.log('sucsses')
  //       // update current user
  //       this.setCurrentUser(user);
  //       // go back to homepage
  //       // this.router.navigate(['/'])

  //     } else {
  //       alert('user name or password  is not correct, Please try again')
  //       this.router.navigate(['../../src/error.html'])
  //     }
  //   })
  // }


  // setCurrentUser(user) {
  //   if(user.motoboyId === null){
  //     this.customerService.singleCustomerObservable.subscribe((customer)=>{
  //       this.currentUser = new Customer();
  //       this.currentUser = customer;
  //       this.singleUserSubject.next(this.currentUser)
  //     })
  //     this.customerService.getCustomer(user.customerId);
     
  //   }else{
  //     this.currentUser = new MotoBoy();
  //     this.motoService.singleMotoObservable.subscribe((motoboy)=>{
  //       this.currentUser = motoboy;
  //       this.singleUserSubject.next(this.currentUser)
  //     });
  //     this.motoService.getMoto(user.motoboyId);
  //   }
  // }

  getCustomers() {
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

  addNewClient(newUser: User) {
    this.http.post<User>('usersApi/add', newUser).subscribe(data => {
      this.currentUser = data[0];
      this.singleUserSubject.next(data[0])
      console.log(newUser)
      console.log("a")
    })

  }

  deleteCustomer(currentUser) {
    console.log("inside delete")
    let id = currentUser.customerId
    currentUser.active = false;
    this.http.put<User>('usersApi/delete/' + id, { customer: currentUser }).subscribe((data) => {
      //update motoboys array
      this.currentUser = data;
      this.singleUserSubject.next(data);

    })
  }
}
