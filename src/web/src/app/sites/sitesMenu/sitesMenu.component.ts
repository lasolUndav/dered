import { Component, OnInit } from '@angular/core';
import { SiteService } from '../shared/site.service';
import { Site } from '../shared/site.model';

@Component({
  selector: 'sites-menu',
  templateUrl: './sitesMenu.component.html',
  styleUrls: ['./sitesMenu.component.css']
})
export class SitesMenuComponent implements OnInit {

  sites:Site[];

  constructor(private siteService: SiteService) { }

  ngOnInit() {
    this.siteService.getSites().subscribe(sites => {
      this.sites = sites;
    });
  }
}
