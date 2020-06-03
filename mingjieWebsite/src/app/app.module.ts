import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ItemsComponent } from './item/components/items/items.component';

// service
import { ItemsService } from './item/services/items.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebse, 'mingjieWebsite'),
    AngularFirestoreModule,
  ],
  providers: [
    ItemsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
