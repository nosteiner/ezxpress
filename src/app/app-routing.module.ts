import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewclientComponent } from './components/newclient/newclient.component';
import { AddMotoboyComponent } from './components/add-motoboy/add-motoboy.component'
import { DeliveryComponent } from './components/delivery/delivery.component'
import { TableComponent } from './components/table/table.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StarsComponent } from './components/stars/stars.component';
import { AboutUsComponent } from './components/about-us/about-us.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-customer', component: NewclientComponent },
  { path: 'add-motoboy', component: AddMotoboyComponent },
  { path: 'add-delivery', component: DeliveryComponent },
  { path: 'orders', component: TableComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'table', component: TableComponent },
  { path: 'star', component: StarsComponent },
  { path: 'aboutUs', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
