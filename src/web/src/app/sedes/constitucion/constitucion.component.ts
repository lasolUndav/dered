import { Component, OnInit } from '@angular/core';
import { SedeService } from '../shared/sede.service'
import { Sede} from '../shared/sede.model'

@Component({
  selector: 'app-constitucion',
  templateUrl: './constitucion.component.html',
  styleUrls: ['./constitucion.component.css']
})
export class ConstitucionComponent implements OnInit {
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
