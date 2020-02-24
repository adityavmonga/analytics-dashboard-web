import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IclassicComponent } from './components/iclassic/iclassic.component';
import { DashboardRoutingModule } from './routing/dashboard-routing.module';

@NgModule({
  declarations: [IclassicComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [IclassicComponent],
  // entryComponents: [IclassicComponent]
})
export class DashboardModule { }
