import { Component, OnInit } from '@angular/core';
import { SedeService } from '../sede.service';
import { Sede } from '../sede.model';

@Component({
  selector: 'sedes-menu',
  templateUrl: './sedesMenu.component.html',
  styleUrls: ['./sedesMenu.component.css']
})
export class SedesMenuComponent implements OnInit {

  sedes:Sede[];

  constructor(private sedeService: SedeService) { }

  ngOnInit() {
    this.sedeService.getSedes().subscribe(sedes => {
      this.sedes = sedes;
    });
  }
}
