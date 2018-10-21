import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA } from '@angular/core';
import { ButtonsModule, WavesModule, IconsModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatDividerModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import { SignaturePadModule } from 'angular2-signaturepad';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';


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
import { SignatureComponent } from './signature/signature.component';
import { OrderdeliveredComponent } from './orderdelivered/orderdelivered.component';
import { LoginComponent } from './login/login.component';
import { EditMotoComponent } from './edit-moto/edit-moto.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { OrderScreenComponent } from './order-screen/order-screen.component';
import { StarsComponent } from './stars/stars.component';
import {MatRadioModule} from '@angular/material/radio';
import { StepperComponent } from './stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthInterceptor } from '../../AuthInterceptor';
import { MenuComponent } from './menu/menu.component';
import { MsgsnackComponent } from './msgsnack/msgsnack.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';




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
    EditMotoComponent,
    EditCustomerComponent,
    OrderScreenComponent,
    StarsComponent,
    StepperComponent,
    MenuComponent,
    MsgsnackComponent,
    AboutUsComponent,
    InfoComponent,
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
    FlexLayoutModule,
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
    MatSidenavModule,
    ButtonsModule, WavesModule, IconsModule
  

    
  ],
  entryComponents: [OrderDialogComponent, OrderScreenComponent],
  providers: [EzxpressService, MotoService, OrdersService, AuthService, JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]

})
export class AppModule { }
