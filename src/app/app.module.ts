import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Layout1Component } from './UI/layout/layout1/layout1.component';
import { Layout2Component } from './UI/layout/layout2/layout2.component';
import { LayoutBlankComponent } from './UI/layout/layout-blank/layout-blank.component';
import { LayoutSidenavComponent } from './UI/layout/layout-sidenav/layout-sidenav.component';
import { LayoutNavbarComponent } from './UI/layout/layout-navbar/layout-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    Layout1Component,
    Layout2Component,
    LayoutBlankComponent,
    LayoutSidenavComponent,
    LayoutNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
