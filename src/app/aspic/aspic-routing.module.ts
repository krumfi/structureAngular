import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { TotoComponent } from './toto/toto.component';

const routes: Routes = [
  { 
    path: '', component: LayoutComponent, children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'toto', component: TotoComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspicRoutingModule { }
