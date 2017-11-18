import { Component, OnInit, Input } from '@angular/core';
import { WindowSizeService } from '../../shared/window-size.service';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})

export class PageContentComponent implements OnInit {

  @Input('push-content') isPushedPageContent: boolean;

  screenWidth:number;

  constructor(public windowSizeService:WindowSizeService) { }

  ngOnInit() {
  }

  getPageContentMargin() {

    this.getWindowSizeScreen();

    if (this.isPushedPageContent  && this.screenWidth > 767) {
      return "250px";
    } else {
      return "0px";
    }
  }

  getWindowSizeScreen() {
    this.screenWidth = this.windowSizeService.getWindowsScreenSize();
  }

}
