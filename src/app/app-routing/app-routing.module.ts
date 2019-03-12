import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomeComponent,
  DesignComponent
} from '../components';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'design',
    component: DesignComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
