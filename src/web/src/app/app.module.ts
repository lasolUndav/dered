import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Fire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
// Component Imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from "@angular/router";
import { DeredComponent } from './dered/dered.component';
import { NavbarSitesListComponent } from './navbar-sites-list/navbar-sites-list.component';
// Service Imports
import { SiteService } from './navbar-sites-list/shared/site.service';

const appRoutes: Routes = [
  {path: '', component: DeredComponent }
];

export const firebaseConfig = {
  apiKey: "AIzaSyAuo6FS-DiZuaMiQcqLh7PVGSf7JVFvSug",
  authDomain: "dered-dev.firebaseapp.com",
  databaseURL: "https://dered-dev.firebaseio.com",
  storageBucket: "dered-dev.appspot.com",
  messagingSenderId: "1014707615612"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DeredComponent,
    NavbarSitesListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
      AngularFireAuth,
      AngularFireDatabase,
      SiteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
