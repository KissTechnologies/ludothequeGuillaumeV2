import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GoodiesComponent } from './goodies.component';

const routes: Routes = [
  { path: '', component: GoodiesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodiesRoutingModule { }
