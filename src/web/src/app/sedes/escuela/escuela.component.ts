import { Component, OnInit } from '@angular/core';
import { SedeService } from '../shared/sede.service'
import { Sede} from '../shared/sede.model'

@Component({
  selector: 'app-escuela',
  templateUrl: './escuela.component.html',
  styleUrls: ['./escuela.component.css']
})
export class EscuelaComponent implements OnInit {
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
