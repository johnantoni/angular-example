import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Captain } from './captains/captain'
import { CAPTAINS } from './captains/mock-captains'

@Injectable({
  providedIn: 'root'
})
export class CaptainService {

  constructor() { }

  getCaptains(): Observable<Captain[]> {
    return of(CAPTAINS)
  }
}
