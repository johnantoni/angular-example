import { Component } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Welcome to my Lighthouse';
  showToolTip: boolean = false
  toolTipContent: string = "message"

  myToggle(tip) {
    this.showToolTip = !this.showToolTip
    if (tip.isOpen) {
      tip.hide()
    } else {
      tip.show()
    }
  }
}
