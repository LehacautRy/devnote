import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraphiquePage } from './graphique.page';

const routes: Routes = [
  {
    path: '',
    component: GraphiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphiquePageRoutingModule {}
