import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
//import { Observable } from 'rxjs';
import { Site } from './site.model';


@Injectable()
export class SiteService {

  sites: FirebaseListObservable<any[]>;
  //site: FirebaseObjectObservable<any>;

  constructor(
      public fireDatabase:AngularFireDatabase
  ) {
    this.sites = this.fireDatabase.list('/sedes') as FirebaseListObservable<Site[]>;
  }

  getSites() {
    return this.sites;
  }

}
