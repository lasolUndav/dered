import { Component, OnInit } from '@angular/core';
import { SiteService } from '../shared/site.service';
import { Site } from '../shared/site.model';

@Component({
  selector: 'app-site-list-navbar-left',
  templateUrl: './site-list-navbar-left.component.html',
  styleUrls: ['./site-list-navbar-left.component.css']
})
export class SiteListNavbarLeftComponent implements OnInit {

  sites:Site[];

  constructor(private siteService: SiteService) { }

  ngOnInit() {
    this.siteService.getSites().subscribe(sites => {
      this.sites = sites;
    });
  }
}
