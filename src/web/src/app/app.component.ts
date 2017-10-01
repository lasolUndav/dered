import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  navbarLeftButtonClicked:boolean;

  onNavbarLeftButtonChanged(isClicked:boolean) {
    this.navbarLeftButtonClicked = isClicked;
  }
  onNavbarLeftClosed(navbarLeftClosed:boolean) {
    this.navbarLeftButtonClicked = navbarLeftClosed;
  }
}
