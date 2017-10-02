import { Component, OnInit } from '@angular/core';
import { SiteService } from '../shared/site.service';
import { Site } from '../shared/site.model';

@Component({
  selector: 'app-site-list-navbar-top',
  templateUrl: './site-list-navbar-top.component.html',
  styleUrls: ['./site-list-navbar-top.component.css']
})
export class SiteListNavbarTopComponent implements OnInit {

  sites:Site[];

  constructor(public siteService: SiteService) { }

  ngOnInit() {
    this.siteService.getSites().subscribe(sites => {
      this.sites = sites;
    });
  }

}
