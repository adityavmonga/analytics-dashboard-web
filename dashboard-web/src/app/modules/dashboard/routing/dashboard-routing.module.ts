import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassicComponent } from '../components/classic/classic.component';

const routes: Routes = [
    { path: '', redirectTo: 'classic'},
    { path: 'classic', component: ClassicComponent},
    { path: 'webi', component: ClassicComponent},
    { path: 'webs', component: ClassicComponent},
    { path: 'insights', component: ClassicComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
