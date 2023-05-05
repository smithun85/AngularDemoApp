import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    MainLayoutComponent,
    FooterOnlyLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    MainLayoutComponent,
    FooterOnlyLayoutComponent,
    AuthLayoutComponent
  ],
})
export class LayoutModule { }
