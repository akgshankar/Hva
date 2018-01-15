import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule,MdToolbarModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    MdToolbarModule
  ],
  declarations: [HomeComponent, NavbarComponent],
  exports:[HomeComponent]
})
export class CricModule { }
