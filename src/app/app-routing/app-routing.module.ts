import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { routes } from './routes';
import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    // { enableTracing: true })
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
