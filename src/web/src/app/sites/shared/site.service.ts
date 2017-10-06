import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Site } from './site.model';

@Injectable()
export class SiteService {
  sites: FirebaseListObservable<Site[]>;

  constructor(fireDb:AngularFireDatabase) {
    this.sites = fireDb.list('/sedes');
  }

  getSites() {
    return this.sites;
  }
}
