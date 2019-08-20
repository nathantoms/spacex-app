// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomePageComponent, LaunchDetailPageComponent } from './pages';


const routes: Routes = [
  {
    path: 'launch/:id',
    component: LaunchDetailPageComponent
  },
  {
    path: 'home',
    redirectTo : '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: '**',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
