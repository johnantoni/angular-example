import { Component, OnInit } from '@angular/core';
import { Captain } from './captain'

@Component({
  selector: 'app-captains',
  templateUrl: './captains.component.html',
  styleUrls: ['./captains.component.scss']
})
export class CaptainsComponent implements OnInit {
  captain: Captain = {
    id: 1,
    name: "Richard Basehart"
  }

  constructor() { }

  ngOnInit() {
    // initialisation logic (aka componentDidMount)
  }

}
