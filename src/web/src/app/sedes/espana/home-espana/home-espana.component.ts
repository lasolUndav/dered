import { Component, OnInit } from '@angular/core';
import { SedeService } from '../../shared/sede.service'
import { Sede} from '../../shared/sede.model'

@Component({
  selector: 'app-showcase-espana',
  templateUrl: './home-espana.component.html',
  styleUrls: ['./home-espana.component.scss']
})
export class HomeEspanaComponent implements OnInit {
  sedeService: SedeService;
  sede: Sede;
  constructor(sedeService: SedeService)
  {
    this.sedeService = sedeService;
  }

  ngOnInit() {
    this.sedeService.getEspana().subscribe(sede=> {
      this.sede = sede;
    });
  }
}
