import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JeuxComponent } from './jeux.component';

const routes: Routes = [
  { path: '', component: JeuxComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JeuxRoutingModule { }
