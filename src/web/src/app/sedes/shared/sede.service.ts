import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Sede } from './sede.model';

@Injectable()
export class SedeService {
  fireDb:AngularFireDatabase;
  sedes: FirebaseListObservable<Sede[]>;
  pineiro: FirebaseObjectObservable<Sede>;
  espana: FirebaseObjectObservable<Sede>;
  riachuelo: FirebaseObjectObservable<Sede>;
  escuela: FirebaseObjectObservable<Sede>;
  constitucion: FirebaseObjectObservable<Sede>;
  doceOctubre: FirebaseObjectObservable<Sede>;
  constructor(fireDb:AngularFireDatabase) {
    this.fireDb = fireDb;
    this.sedes = fireDb.list('/sedes');
    this.pineiro = fireDb.object('/sedes/1');
    this.espana = fireDb.object('/sedes/2');
    this.riachuelo = fireDb.object('/sedes/3');
    this.escuela = fireDb.object('/sedes/4');
    this.constitucion = fireDb.object('/sedes/5');
    this.doceOctubre = fireDb.object('/sedes/6');
  }

  getSedes() {
    return this.sedes;
  }

  getPineiro(){
    return this.pineiro;
  }

  getEspana(){
    return this.espana;
  }

  getRiachuelo(){
    return this.riachuelo;
  }

  getEscuela(){
    return this.escuela;
  }

  getConstitucion(){
    return this.constitucion;
  }

  getDoceOctubre(){
    return this.doceOctubre;
  }
}
