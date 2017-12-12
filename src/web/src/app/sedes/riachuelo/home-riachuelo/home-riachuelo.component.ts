import { Component, OnInit } from '@angular/core';
import { SedeService } from '../../shared/sede.service'
import { Sede} from '../../shared/sede.model'

@Component({
  selector: 'app-showcase-riachuelo',
  templateUrl: './home-riachuelo.component.html',
  styleUrls: ['./home-riachuelo.component.scss']
})
export class HomeRiachueloComponent implements OnInit {
  sedeService: SedeService;
  sede: Sede;
  constructor(sedeService: SedeService)
  {
    this.sedeService = sedeService;
  }

  ngOnInit() {
    this.sedeService.getRiachuelo().subscribe(sede=> {
      this.sede = sede;
    });
  }
}
