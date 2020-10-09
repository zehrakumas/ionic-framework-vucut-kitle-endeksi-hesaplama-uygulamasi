import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sayfa3PageRoutingModule } from './sayfa3-routing.module';

import { Sayfa3Page } from './sayfa3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sayfa3PageRoutingModule
  ],
  declarations: [Sayfa3Page]
})
export class Sayfa3PageModule {}
