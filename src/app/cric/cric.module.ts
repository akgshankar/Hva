import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule,MatSidenavModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  imports: [
    CommonModule,   
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  declarations: [HomeComponent, NavbarComponent],
  exports:[HomeComponent]
})
export class CricModule { }
