import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { HttpClientModule } from '@angular/common/http'; 
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
//import {AccordionModule} from 'primeng/accordion';  
import {FileUploadModule} from 'primeng/fileupload';


import { AppComponent } from './app.component';
import { EzxpressService } from './ezxpress.service';
import { AddMotoboyComponent } from './add-motoboy/add-motoboy.component';
import { MapComponent } from './map/map.component';
import { NewclientComponent } from './newclient/newclient.component';
import { HomeComponent } from './home/home.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { MotoService } from './moto.service';
import { DestinationComponent } from './destination/destination.component';
import { MaprouteComponent } from './maproute/maproute.component';
import { MotoShareLiveLocationComponent } from './moto-share-live-location/moto-share-live-location.component';
import { AppRoutingModule } from './/app-routing.module';
import { TableComponent } from './table/table.component';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { OrdersService } from './orders.service';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    AddMotoboyComponent,
    MapComponent,
    NewclientComponent,
    HomeComponent,
    DeliveryComponent,
    DestinationComponent,
    MaprouteComponent,
    MotoShareLiveLocationComponent,
    TableComponent,
    OrderDialogComponent,
    ProfileComponent

  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB-G0WodfAOEjuc9WcD0lC70UesBjzJG9g',
      libraries: ["places"]
    }),
    AgmDirectionModule,
    HttpClientModule,
    MatToolbarModule,
    FlexLayoutModule,
    AppRoutingModule,
    GooglePlaceModule,
    MatTableModule, 
    MatSortModule,
    MatDialogModule,
    FileUploadModule


    
  ],
  entryComponents: [OrderDialogComponent],
  providers: [EzxpressService, MotoService, OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
