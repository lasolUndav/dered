import { Component, OnInit } from '@angular/core';
import { SedeService } from '../sede.service';
import { Sede } from '../sede.model';

@Component({
  selector: 'sedes-navigation-bar',
  templateUrl: './sedesNavigationBar.component.html',
  styleUrls: ['./sedesNavigationBar.component.css']
})
export class SedesNavigationBarComponent implements OnInit {

  sedes:Sede[];

  constructor(public sedeService: SedeService) { }

  ngOnInit() {
    this.sedeService.getSedes().subscribe(sedes => {
      this.sedes = sedes;
    });
  }

}
