import { Component, OnInit } from '@angular/core';
import { CaptainService } from '../captain.service'
import { Captain } from './captain'

@Component({
  selector: 'app-captains',
  templateUrl: './captains.component.html',
  styleUrls: ['./captains.component.scss']
})
export class CaptainsComponent implements OnInit {

  captains: Captain[];
  selectedCaptain: Captain;

  constructor(private captainService: CaptainService) { }

  getCaptains(): void {
    this.captainService.getCaptains()
      .subscribe(captains => this.captains = captains)
  }

  onSelect(captain: Captain): void {
    this.selectedCaptain = captain;
  }

  ngOnInit() {
    // initialisation logic (aka componentDidMount)
    this.getCaptains()
  }

}
