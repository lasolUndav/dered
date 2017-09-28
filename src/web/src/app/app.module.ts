import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from "@angular/router";
import { DeredComponent } from './dered/dered.component';

const appRoutes: Routes = [
  {path: '', component: DeredComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DeredComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
