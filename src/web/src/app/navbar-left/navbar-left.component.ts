import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { WindowSizeService } from '../shared/window-size.service';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.css']
})
export class NavbarLeftComponent implements OnInit {

  @Input('hide-navbar-left') hideNavbarLeft: boolean;
  @Output('change') click = new EventEmitter;

  screenWidth:number;

  constructor(public windowSizeService:WindowSizeService) {
  }

  ngOnInit() {
  }

  getNavbarLeftPosition() {

    this.getWindowSizeScreen();

    if (this.hideNavbarLeft && this.screenWidth > 767) {
      return "0px";
    } else {
      return "-250px";
    }
  }

  onClick() {
    this.hideNavbarLeft = !this.hideNavbarLeft;
    this.click.emit(this.hideNavbarLeft);
  }

  getWindowSizeScreen() {
    this.screenWidth = this.windowSizeService.getWindowsScreenSize();
  }

}
