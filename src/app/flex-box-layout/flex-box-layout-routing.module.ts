import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexBoxLayoutComponent } from './components/flex-box-layout/flex-box-layout.component';

const routes: Routes = [{ path: '', component: FlexBoxLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlexBoxLayoutRoutingModule { }
