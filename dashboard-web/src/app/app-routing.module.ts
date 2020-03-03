import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch:'full' },
  { path: '', redirectTo: 'app', pathMatch:'full' },
  // { path: 'app', loadChildren: './modules/landing/landing.module#LandingModule'},
  // { path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'},
  { path: 'app', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)},
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'test', loadChildren: () => import('./modules/test/test.module').then(m => m.TestModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
