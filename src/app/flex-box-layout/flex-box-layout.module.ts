import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexBoxLayoutRoutingModule } from './flex-box-layout-routing.module';
import { components } from './components';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    FlexBoxLayoutRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
  ]
})
export class FlexBoxLayoutModule { }
