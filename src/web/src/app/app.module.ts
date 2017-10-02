import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Fire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
// Component Imports
import { AppComponent } from './app.component';
//import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from "@angular/router";
import { DeredComponent } from './dered/dered.component';
//import { NavbarSitesListComponent } from './navbar-sites-list/navbar-sites-list.component';
import { PineiroComponent } from './pineiro/pineiro.component';
// Service Imports
import { SiteService } from './sites/shared/site.service';
import { WindowSizeService } from './shared/window-size.service';
import { ShowcasePineiroComponent } from './showcase-pineiro/showcase-pineiro.component';
import { NavbarLeftComponent } from './navbar-left/navbar-left.component';
import { PageContentComponent } from './page-content/page-content.component';
import { NavbarLeftButtonComponent } from './navbar-left-button/navbar-left-button.component';
import { SitesComponent } from './sites/sites.component';
import { SiteListNavbarTopComponent } from './sites/site-list-navbar-top/site-list-navbar-top.component';
import { SiteListNavbarLeftComponent } from './sites/site-list-navbar-left/site-list-navbar-left.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';


const appRoutes: Routes = [
  { path: '', component: DeredComponent },
  { path: 'pineiro', component: PineiroComponent }
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
    DeredComponent,
    PineiroComponent,
    ShowcasePineiroComponent,
    NavbarLeftComponent,
    PageContentComponent,
    NavbarLeftButtonComponent,
    SitesComponent,
    SiteListNavbarTopComponent,
    SiteListNavbarLeftComponent,
    NavbarTopComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
      AngularFireAuth,
      AngularFireDatabase,
      SiteService,
      WindowSizeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
