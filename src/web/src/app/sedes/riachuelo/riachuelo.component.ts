import { Component, OnInit } from '@angular/core';
import { SedeService } from '../shared/sede.service'
import { Sede} from '../shared/sede.model'

@Component({
  selector: 'app-riachuelo',
  templateUrl: './riachuelo.component.html',
  styleUrls: ['./riachuelo.component.css']
})
export class RiachueloComponent implements OnInit {
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
