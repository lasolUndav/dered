import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Fire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
// Angular Google Maps imports
import { AgmCoreModule } from '@agm/core';
// Component Imports
import { AppComponent } from './app.component';
//import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from "@angular/router";
import { DeredComponent } from './dered/dered.component';
//import { NavbarSitesListComponent } from './navbar-sites-list/navbar-sites-list.component';
import { PineiroComponent } from './sedes/pineiro/pineiro.component';
import { EspanaComponent } from './sedes/espana/espana.component';
import { RiachueloComponent } from './sedes/riachuelo/riachuelo.component';
import { ConstitucionComponent } from './sedes/constitucion/constitucion.component';
import { EscuelaComponent } from './sedes/escuela/escuela.component';
import { DoceOctubreComponent } from './sedes/doceOctubre/doceOctubre.component';
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
import { HomeEspanaComponent } from './sedes/espana/home-espana/home-espana.component';
import { HomeRiachueloComponent } from './sedes/riachuelo/home-riachuelo/home-riachuelo.component';
import { HomeConstitucionComponent } from './sedes/constitucion/home-constitucion/home-constitucion.component';
import { HomeEscuelaComponent } from './sedes/escuela/home-escuela/home-escuela.component';
import { HomeDoceOctubreComponent } from './sedes/doceOctubre/home-doceOctubre/home-doceOctubre.component';

const appRoutes: Routes = [
  { path: '', component: DeredComponent },
  { path: 'pineiro', component: PineiroComponent, data: { idSede: 1 } },
  { path: 'espana', component: EspanaComponent, data: { idSede: 2 } },
  { path: 'riachuelo', component: RiachueloComponent, data: { idSede: 3 } },
  { path: 'escuela', component: EscuelaComponent, data: { idSede: 4 } },
  { path: 'constitucion', component: ConstitucionComponent, data: { idSede: 5 } },
  { path: 'doceOctubre', component: DoceOctubreComponent, data: { idSede: 6 } }
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
    EspanaComponent,
    HomeEspanaComponent,
    LeftMenuComponent,
    PageContentComponent,
    NavbarLeftButtonComponent,
    SedesMenuComponent,
    SedesNavigationBarComponent,
    HeaderComponent,
    RiachueloComponent,
    HomeRiachueloComponent,
    ConstitucionComponent,
    HomeConstitucionComponent,
    EscuelaComponent,
    HomeEscuelaComponent,
    DoceOctubreComponent,
    HomeDoceOctubreComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAuo6FS-DiZuaMiQcqLh7PVGSf7JVFvSug'
    })
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
