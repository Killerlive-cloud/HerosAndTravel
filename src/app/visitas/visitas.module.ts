import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VisitasPage } from './visitas.page';
import { ModalPage } from '../modal/modal.page';
import { ModalPageModule } from '../modal/modal.module';

const routes: Routes = [
  {
    path: '',
    component: VisitasPage
  }
];

@NgModule({
  entryComponents:[
    ModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModalPageModule,
  ],
  declarations: [VisitasPage]
})
export class VisitasPageModule {}
