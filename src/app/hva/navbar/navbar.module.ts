import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { Routes,RouterModule} from '@angular/router';
import { MdToolbarModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdToolbarModule,
    FlexLayoutModule
  ],
  declarations: [NavbarComponent],
  exports:[NavbarComponent]
})
export class NavbarModule { }
