import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sayfa1PageRoutingModule } from './sayfa1-routing.module';

import { Sayfa1Page } from './sayfa1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sayfa1PageRoutingModule
  ],
  declarations: [Sayfa1Page]
})
export class Sayfa1PageModule {}
