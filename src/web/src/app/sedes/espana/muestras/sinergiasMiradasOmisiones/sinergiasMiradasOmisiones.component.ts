import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dered-sinergiasMiradasOmisiones',
  templateUrl: './sinergiasMiradasOmisiones.component.html',
  styleUrls: ['./sinergiasMiradasOmisiones.component.css']
})
export class SinergiasMiradaOmisionesComponent implements OnInit {
  constructor()
  {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
