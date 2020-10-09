import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sayfa2PageRoutingModule } from './sayfa2-routing.module';

import { Sayfa2Page } from './sayfa2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sayfa2PageRoutingModule
  ],
  declarations: [Sayfa2Page]
})
export class Sayfa2PageModule {}
