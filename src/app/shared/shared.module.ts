import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './components/mainlayout/mainlayout.component';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './components/authlayout/authlayout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    SidebarComponent,
    RouterModule
  ]
})
export class SharedModule {}
