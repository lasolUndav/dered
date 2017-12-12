import { Component, OnInit } from '@angular/core';
import { SedeService } from '../shared/sede.service'
import { Sede} from '../shared/sede.model'

@Component({
  selector: 'app-doceOctubre',
  templateUrl: './doceOctubre.component.html',
  styleUrls: ['./doceOctubre.component.css']
})
export class DoceOctubreComponent implements OnInit {
  sedeService: SedeService;
  sede: Sede;
  constructor(sedeService: SedeService)
  {
    this.sedeService = sedeService;
  }

  ngOnInit() {
    this.sedeService.getDoceOctubre().subscribe(sede=> {
      this.sede = sede;
    });
  }
}
