import { Component, OnInit } from '@angular/core';
import { SedeService } from '../../shared/sede.service'
import { Sede} from '../../shared/sede.model'

@Component({
  selector: 'app-showcase-constitucion',
  templateUrl: './home-constitucion.component.html',
  styleUrls: ['./home-constitucion.component.scss']
})
export class HomeConstitucionComponent implements OnInit {

  sedeService: SedeService;
  sede: Sede;
  constructor(sedeService: SedeService)
  {
    this.sedeService = sedeService;
  }

  ngOnInit() {
    this.sedeService.getConstitucion().subscribe(sede=> {
      this.sede = sede;
    });
  }
}
