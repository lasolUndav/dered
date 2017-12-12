import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Sede } from './sede.model';

@Injectable()
export class SedeService {
  fireDb:AngularFireDatabase;
  sedes: FirebaseListObservable<Sede[]>;
  pineiro: FirebaseObjectObservable<Sede>;
  constructor(fireDb:AngularFireDatabase) {
    this.fireDb = fireDb;
    this.sedes = fireDb.list('/sedes');
    this.pineiro = fireDb.object('/sedes/1');
  }

  getSedes() {
    return this.sedes;
  }

  getPineiro(){
    return this.pineiro;
  }
}
