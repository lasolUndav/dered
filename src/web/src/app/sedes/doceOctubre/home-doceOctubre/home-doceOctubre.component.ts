import { Component, OnInit, Input } from '@angular/core';
import { Sede} from '../../shared/sede.model'

@Component({
  selector: 'app-showcase-doceOctubre',
  templateUrl: './home-doceOctubre.component.html',
  styleUrls: ['./home-doceOctubre.component.scss']
})
export class HomeDoceOctubreComponent implements OnInit {
  @Input() sede: Sede;
  constructor()
  {
  }

  ngOnInit() {
  }
}
