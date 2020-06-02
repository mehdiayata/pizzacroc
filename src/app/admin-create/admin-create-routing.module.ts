import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCreatePage } from './admin-create.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCreatePageRoutingModule {}
