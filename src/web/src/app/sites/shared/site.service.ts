import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Site } from './site.model';

@Injectable()
export class SiteService {

  sites: FirebaseListObservable<any[]>;

  constructor(
      public fireDatabase:AngularFireDatabase
  ) {
    this.sites = this.fireDatabase.list('/sedes') as FirebaseListObservable<Site[]>;
  }

  getSites() {
    return this.sites;
  }
}
