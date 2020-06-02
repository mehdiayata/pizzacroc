import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCreatePageRoutingModule } from './admin-create-routing.module';

import { AdminCreatePage } from './admin-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCreatePageRoutingModule
  ],
  declarations: [AdminCreatePage]
})
export class AdminCreatePageModule {}
