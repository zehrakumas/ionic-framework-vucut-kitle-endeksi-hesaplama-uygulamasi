import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sayfa2Page } from './sayfa2.page';

const routes: Routes = [
  {
    path: '',
    component: Sayfa2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sayfa2PageRoutingModule {}
