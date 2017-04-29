import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {FirebaseService} from './services/firebase.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { AddlistingComponent } from './components/addlisting/addlisting.component';
import { FooterComponent } from './components/footer/footer.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCCL85EytjV5nsYkPUapIa3xvTOBfC2DQg",
    authDomain: "dentacare-9e5f6.firebaseapp.com",
    databaseURL: "https://dentacare-9e5f6.firebaseio.com",
    projectId: "dentacare-9e5f6",
    storageBucket: "dentacare-9e5f6.appspot.com",
    messagingSenderId: "864616280720"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'listings', component:ListingsComponent},
  {path:'listing/:id', component:ListingComponent},
  // {path:'listing', component:ListingComponent},
  {path: 'add-listing', component:AddListingComponent},
  {path: 'addlisting', component:AddlistingComponent},
  {path: 'edit-listing', component:EditListingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    AddlistingComponent,
    EditListingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
