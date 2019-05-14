import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

// load all libraries here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptainsComponent } from './captains/captains.component';
import { CaptainDetailComponent } from './captain-detail/captain-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptainsComponent,
    CaptainDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
