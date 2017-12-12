import { Component, OnInit, Input } from '@angular/core';
import { Sede} from '../../shared/sede.model'

@Component({
  selector: 'app-showcase-pineiro',
  templateUrl: './home-pineiro.component.html',
  styleUrls: ['./home-pineiro.component.scss']
})
export class HomePineiroComponent implements OnInit {
  @Input() sede: Sede;
  constructor()
  {
  }

  ngOnInit() {
  }
}
