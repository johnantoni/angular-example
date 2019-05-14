import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Captain } from './captains/captain'
import { CAPTAINS } from './captains/mock-captains'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CaptainService {

  constructor(private messageService: MessageService) { }

  getCaptains(): Observable<Captain[]> {
    this.messageService.add('CaptainService: fetched captains')
    return of(CAPTAINS)
  }
}
