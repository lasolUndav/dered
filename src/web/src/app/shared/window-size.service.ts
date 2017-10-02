import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WindowSizeService {

  screenWidth:number = window.innerWidth;

  constructor() {
    const $resizeEvent = Observable.fromEvent(window, 'resize')
        .map(() => {
          return window.innerWidth;
        })
        .debounceTime(200);

    $resizeEvent.subscribe(data => {
      this.screenWidth = data;
    });
  }

  getWindowsScreenSize() {
    return this.screenWidth;
  }

}
