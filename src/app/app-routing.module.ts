import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HowItWorksComponent } from './sections/how-it-works/how-it-works/how-it-works.component';

const routes: Routes = [
  { path: 'how-it-works', component: HowItWorksComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
