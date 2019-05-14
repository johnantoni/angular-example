import { Component, OnInit, Input } from '@angular/core';
import { Captain } from '../captains/captain'

@Component({
  selector: 'app-captain-detail',
  templateUrl: './captain-detail.component.html',
  styleUrls: ['./captain-detail.component.scss']
})
export class CaptainDetailComponent implements OnInit {

  constructor() { }

  @Input() captain: Captain;

  ngOnInit() {
  }

}
