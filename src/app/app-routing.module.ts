import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaptainsComponent } from './captains/captains.component'

const routes: Routes = [
  { path: '', redirectTo: '/captains', pathMatch: 'full' },
  { path: 'captains', component: CaptainsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
