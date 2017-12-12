import { Component, OnInit, Input } from '@angular/core';
import { Sede} from '../../shared/sede.model'

@Component({
  selector: 'app-showcase-riachuelo',
  templateUrl: './home-riachuelo.component.html',
  styleUrls: ['./home-riachuelo.component.scss']
})
export class HomeRiachueloComponent implements OnInit {
  @Input() sede: Sede;
  constructor()
  {
  }

  ngOnInit() {
  }
}
