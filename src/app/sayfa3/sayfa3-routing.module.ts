import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sayfa3Page } from './sayfa3.page';

const routes: Routes = [
  {
    path: '',
    component: Sayfa3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sayfa3PageRoutingModule {}
