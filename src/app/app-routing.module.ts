import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'flex-box-layout',
    loadChildren: () => import('./flex-box-layout/flex-box-layout.module').then(m => m.FlexBoxLayoutModule)
  },
  {
    path: '',
    redirectTo: 'flex-box-layout',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
