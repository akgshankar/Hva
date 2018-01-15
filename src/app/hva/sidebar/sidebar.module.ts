import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { Routes, RouterModule } from '@angular/router';
import { SidenavContentModule } from './sidenav-content/sidenav-content.module';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CustomersComponent } from './customers/customers.component';
import { AwardsComponent } from './awards/awards.component';
import { TeamComponent } from './team/team.component';
import {
  MdToolbarModule, MdSidenavModule, MdIconModule, MdCardModule
  , MdButtonModule, MdTabsModule, MdGridListModule, MdMenuModule,
}
  from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  imports: [
    CommonModule,
    SidenavContentModule,
    RouterModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdCardModule,
    MdTabsModule
  ],
  declarations: [SidebarComponent, ServicesComponent, ProjectsComponent, TimelineComponent, CustomersComponent, AwardsComponent, TeamComponent, ExperienceComponent],
  exports: [SidebarComponent]
})
export class SidebarModule { }
