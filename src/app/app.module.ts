import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { ProjectComponent } from './home/sidebar/project/project.component';
import { UserComponent } from './home/sidebar/user/user.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import{ProfileComponent} from './home/header/profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProjectComponent,
    UserComponent,
    ProfileComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSidenavModule,
    MatDatepickerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
