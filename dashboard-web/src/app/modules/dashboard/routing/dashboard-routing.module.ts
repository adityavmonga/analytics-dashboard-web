import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IclassicComponent } from '../components/iclassic/iclassic.component';

const routes: Routes = [
    // { path: '', redirectTo: 'classic', pathMatch: 'full'},
    { path: '', component: IclassicComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
