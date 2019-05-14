import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

// load all libraries here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptainsComponent } from './captains/captains.component';
import { CaptainDetailComponent } from './captain-detail/captain-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    CaptainsComponent,
    CaptainDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
