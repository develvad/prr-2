import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HolaService {

  constructor() {
   }

   mozzy() {
    return 'Primera lib';
   }
}
