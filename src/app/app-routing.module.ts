import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectComponent} from './home/sidebar/project/project.component'
import {UserComponent} from './home/sidebar/user/user.component'
import {ProfileComponent} from './home/header/profile/profile.component'
import {HomeComponent} from './home/home.component'
import{LoginComponent}from './login/login.component'
const routes: Routes = [
  {path:'project',component:ProjectComponent},
  {path:'user',component:UserComponent},
  {path:'profile',component:ProfileComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
