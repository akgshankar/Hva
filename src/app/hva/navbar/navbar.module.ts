import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { Routes,RouterModule} from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  declarations: [NavbarComponent],
  exports:[NavbarComponent]
})
export class NavbarModule { }
