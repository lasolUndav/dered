import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Sede } from './sede.model';

@Injectable()
export class SedeService {
  sedes: FirebaseListObservable<Sede[]>;

  constructor(fireDb:AngularFireDatabase) {
    this.sedes = fireDb.list('/sedes');
  }

  getSedes() {
    return this.sedes;
  }
}
