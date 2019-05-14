import { Component, OnInit } from '@angular/core';
import { Captain } from './captain'
import { CAPTAINS } from './mock-captains'

@Component({
  selector: 'app-captains',
  templateUrl: './captains.component.html',
  styleUrls: ['./captains.component.scss']
})
export class CaptainsComponent implements OnInit {

  captains = CAPTAINS

  selectedCaptain: Captain;

  onSelect(captain: Captain): void {
    this.selectedCaptain = captain;
  }

  constructor() { }

  ngOnInit() {
    // initialisation logic (aka componentDidMount)
  }

}
