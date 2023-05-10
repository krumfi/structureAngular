import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AspicRoutingModule } from './aspic-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { TotoComponent } from './toto/toto.component';


@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    TotoComponent
  ],
  imports: [
    CommonModule,
    AspicRoutingModule
  ]
})
export class AspicModule { }
