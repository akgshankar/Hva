import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavContentComponent } from './sidenav-content.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { HighlightComponent } from '../highlight/highlight.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[SidenavContentComponent],
  declarations: [SidenavContentComponent,GalleryComponent,HighlightComponent]
})
export class SidenavContentModule { }
