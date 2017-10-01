import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { SiteService } from '../navbar-sites-list/shared/site.service';
import { Site } from '../navbar-sites-list/shared/site.model';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.css']
})
export class NavbarLeftComponent implements OnInit {

  @Input('hide-navbar-left') hideNavbarLeft: boolean;
  @Output('change') click = new EventEmitter;

  sites:Site[];

  constructor(public siteService: SiteService) {
  }

  ngOnInit() {
    this.siteService.getSites().subscribe(sites =>{
      this.sites = sites;
    });
  }

  getNavbarLeftPosition() {
    if (this.hideNavbarLeft) {
      return "0px";
    } else {
      return "-250px";
    }
  }

  onClick() {
    this.hideNavbarLeft = !this.hideNavbarLeft;
    this.click.emit(this.hideNavbarLeft);
  }

}
