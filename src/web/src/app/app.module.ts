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
import { PineiroComponent } from './pineiro/pineiro.component';
// Service Imports
import { SiteService } from './navbar-sites-list/shared/site.service';
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';
import { ShowcasePineiroComponent } from './showcase-pineiro/showcase-pineiro.component';


const appRoutes: Routes = [
  { path: '', component: DeredComponent },
  { path: 'pineiro', component: PineiroComponent },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
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
    NavbarSitesListComponent,
    PineiroComponent,
    ShowcasePineiroComponent
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
      BreadcrumbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
