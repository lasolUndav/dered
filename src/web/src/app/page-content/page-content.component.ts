import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements OnInit {

  @Input('push-content') isPushed: boolean;

  constructor() { }

  ngOnInit() {
  }

  getPageContentMargin() {
    if (this.isPushed) {
      return "250px";
    } else {
      return "0px";

    }
  }
}
