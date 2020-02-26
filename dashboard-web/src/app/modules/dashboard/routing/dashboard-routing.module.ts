import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassicComponent } from '../components/classic/classic.component';
import { ContainerComponent } from '../components/container/container.component';
import { InsightsComponent } from '../components/insights/insights.component';

const routes: Routes = [
	{ path: '', redirectTo: 'product'},
	{ path: 'product', component: ContainerComponent}
	// 	{ path: 'classic', component: ClassicComponent},
	// 	{ path: 'webi', component: ClassicComponent},
	// 	{ path: 'webs', component: ClassicComponent},
	// 	{ path: 'insights', component: InsightsComponent},
	// ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
