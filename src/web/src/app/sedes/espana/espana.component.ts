import { Component, OnInit } from '@angular/core';
import { SedeService } from '../shared/sede.service'
import { Sede} from '../shared/sede.model'

@Component({
  selector: 'app-espana',
  templateUrl: './espana.component.html',
  styleUrls: ['./espana.component.css']
})
export class EspanaComponent implements OnInit {
  sedeService: SedeService;
  sede: Sede;
  constructor(sedeService: SedeService)
  {
    this.sedeService = sedeService;
  }

  ngOnInit() {
    this.sedeService.getEspana().subscribe(sede=> {
      this.sede = sede;
      console.log('listo')
    });
  }
}
