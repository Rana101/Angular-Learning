import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  /*path?:string -----> used to match the path
  -> can be used to describe wild card using '**'
  -> can be used to describe base route using '' (default route)
     which can be then redirected */
  {path:'login', component:LoginComponent},

  /*pathMatch?:string ----> 'prefix' or 'full'
  -> prefix - //default - 
  */
  // {path:'', redirectTo:'login', pathMatch:'prefix'},

  {path:'', redirectTo:'login', pathMatch:'full'}, //redirecting from base route to login route using redirect and pathMatch

  { path: '**', component:NotFoundComponent } //goes to not found component whenever wild card path is triggered
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
