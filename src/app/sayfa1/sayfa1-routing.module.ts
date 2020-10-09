import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sayfa1Page } from './sayfa1.page';

const routes: Routes = [
  {
    path: '',
    component: Sayfa1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sayfa1PageRoutingModule {}
