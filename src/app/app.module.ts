import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule, ButtonsModule, WavesModule, IconsModule } from 'angular-bootstrap-md';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FileUploadModule } from 'primeng/fileupload';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AuthInterceptor } from '../../AuthInterceptor';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthService } from './auth.service';
import { EzxpressService } from './ezxpress.service';
import { MotoService } from './moto.service';
import { OrdersService } from './orders.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddMotoboyComponent } from './components/add-motoboy/add-motoboy.component';
import { MapComponent } from './components/map/map.component';
import { NewclientComponent } from './components/newclient/newclient.component';
import { HomeComponent } from './components/home/home.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { DestinationComponent } from './components/destination/destination.component';
import { MaprouteComponent } from './components/maproute/maproute.component';
import { MotoShareLiveLocationComponent } from './components/moto-share-live-location/moto-share-live-location.component';
import { TableComponent } from './components/table/table.component';
import { OrderDialogComponent } from './components/order-dialog/order-dialog.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignatureComponent } from './components/signature/signature.component';
import { OrderdeliveredComponent } from './components/orderdelivered/orderdelivered.component';
import { LoginComponent } from './components/login/login.component';
import { OrderScreenComponent } from './components/order-screen/order-screen.component';
import { StarsComponent } from './components/stars/stars.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { MenuComponent } from './components/menu/menu.component';
import { MsgsnackComponent } from './components/msgsnack/msgsnack.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDividerModule,
  MatInputModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatSortModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatStepperModule,
  MatRadioModule,
} from '@angular/material';


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
    ProfileComponent,
    SignatureComponent,
    OrderdeliveredComponent,
    LoginComponent,
    OrderScreenComponent,
    StarsComponent,
    StepperComponent,
    MenuComponent,
    MsgsnackComponent,
    AboutUsComponent,
    FooterComponent,




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
    MDBBootstrapModule.forRoot(),
    AgmDirectionModule,
    HttpClientModule,
    MatToolbarModule,
    AppRoutingModule,
    GooglePlaceModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    FileUploadModule,
    MatDividerModule,
    SignaturePadModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    MatStepperModule,
    MatSnackBarModule,
    ButtonsModule,
    WavesModule,
    IconsModule
  ],
  entryComponents: [OrderDialogComponent, OrderScreenComponent],
  providers: [EzxpressService, MotoService, OrdersService, AuthService, JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]

})
export class AppModule { }
