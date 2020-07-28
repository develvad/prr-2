import { Component, OnInit } from '@angular/core';
import { HolaService } from './hola.service';

@Component({
  selector: 'vad-libr-hola',
  template: `
    <p>
      hola libreria! Cuando serás mía, inside {{ haha }}
    </p>
  `,
  styles: [
  ]
})
export class HolaComponent implements OnInit {

  public haha: string;
  constructor(private readonly h: HolaService) {
    this.haha = this.h.mozzy();
   }

  ngOnInit(): void {
  }

}
