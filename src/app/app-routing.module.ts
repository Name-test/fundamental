import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './page/main/main.component';
import {RepairProductComponent} from './page/repair-product/repair-product.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'product', component: RepairProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
