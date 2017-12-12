import { Component, OnInit } from '@angular/core';
import { SedeService } from '../../shared/sede.service'
import { Sede} from '../../shared/sede.model'

@Component({
  selector: 'app-showcase-doceOctubre',
  templateUrl: './home-doceOctubre.component.html',
  styleUrls: ['./home-doceOctubre.component.scss']
})
export class HomeDoceOctubreComponent implements OnInit {
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
