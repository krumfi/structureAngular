import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  //{ path: '', loadChildren: Dashboard, pathMatch: 'full' },
  { path: 'aspic', loadChildren: () => import('./aspic/aspic.module').then(m => m.AspicModule) }, //lazy loading du module d'aspic
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
