import { Component, OnInit } from '@angular/core';
import { SiteService } from './shared/site.service';
import { Site } from './shared/site.model';

@Component({
  selector: 'app-navbar-sites-list',
  templateUrl: './navbar-sites-list.component.html',
  styleUrls: ['./navbar-sites-list.component.css']
})
export class NavbarSitesListComponent implements OnInit {

  sites:Site[];

  constructor(public siteService: SiteService) {
  }

  ngOnInit() {
    this.siteService.getSites().subscribe(sites =>{
      this.sites = sites;
    });
  }
}
