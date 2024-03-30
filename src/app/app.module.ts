import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { DataComponent } from './pages/data/data.component';
import { SmsComponent } from './pages/sms/sms.component';
import { HomeComponent } from './pages/home/home.component';
import { Sms2Component } from './pages/sms2/sms2.component';
@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    SmsComponent,
    HomeComponent,
    Sms2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
