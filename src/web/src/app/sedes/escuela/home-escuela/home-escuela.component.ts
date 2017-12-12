import { Component, OnInit } from '@angular/core';
import { SedeService } from '../../shared/sede.service'
import { Sede} from '../../shared/sede.model'

@Component({
  selector: 'app-showcase-escuela',
  templateUrl: './home-escuela.component.html',
  styleUrls: ['./home-escuela.component.scss']
})
export class HomeEscuelaComponent implements OnInit {
  sedeService: SedeService;
  sede: Sede;
  constructor(sedeService: SedeService)
  {
    this.sedeService = sedeService;
  }

  ngOnInit() {
    this.sedeService.getEscuela().subscribe(sede=> {
      this.sede = sede;
    });
  }
}
