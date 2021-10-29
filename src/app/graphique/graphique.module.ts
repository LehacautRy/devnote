import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraphiquePageRoutingModule } from './graphique-routing.module';

import { GraphiquePage } from './graphique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraphiquePageRoutingModule
  ],
  declarations: [GraphiquePage]
})
export class GraphiquePageModule {}
