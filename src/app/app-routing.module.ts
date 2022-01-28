import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './shared/aboutus/aboutus.component';

const routes: Routes = [
  {path:'',redirectTo:'/aboutus',pathMatch:'full'},
  {path:'aboutus',component:AboutusComponent},
  {path:'**',redirectTo:'/aboutus',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
