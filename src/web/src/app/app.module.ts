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
import { PineiroComponent } from './sedes/pineiro/pineiro.component';
// Service Imports
import { SedeService } from './sedes/shared/sede.service';
import { WindowSizeService } from './shared/window-size.service';
import { HomePineiroComponent } from './sedes/pineiro/home-pineiro/home-pineiro.component';
import { LeftMenuComponent } from './layout/left-menu/left-menu.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { NavbarLeftButtonComponent } from './layout/left-menu/navbar-left-button/navbar-left-button.component';
import { SedesMenuComponent } from './sedes/shared/sedesMenu/sedesMenu.component';
import { SedesNavigationBarComponent } from './sedes/shared/sedesNavigationBar/sedesNavigationBar.component';
import { HeaderComponent } from './layout/header/header.component';


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
    HomePineiroComponent,
    LeftMenuComponent,
    PageContentComponent,
    NavbarLeftButtonComponent,
    SedesMenuComponent,
    SedesNavigationBarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    SedeService,
    WindowSizeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
