import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { HvaDashboardComponent } from './hva-dashboard/hva-dashboard.component';
import { NavbarModule } from './navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { MaterialModule } from '@angular/material';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidenavContentComponent} from './sidebar/sidenav-content/sidenav-content.component';
import { AwardsComponent} from './sidebar/awards/awards.component';
import { ServicesComponent} from './sidebar/services/services.component';
import { CustomersComponent} from './sidebar/customers/customers.component';
import { TimelineComponent} from './sidebar/timeline/timeline.component';
import { ProjectsComponent} from './sidebar/projects/projects.component';
import { TeamComponent} from './sidebar/team/team.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EnquiryComponent } from './enquiry/enquiry.component'
import { ExperienceComponent} from './sidebar/experience/experience.component';
import { FlexLayoutModule } from "@angular/flex-layout";
 
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutUsComponent },
  { path: 'home', component: HomeComponent, children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: SidenavContentComponent },
      { path: 'dashboard', component: SidenavContentComponent },
      { path: 'awards', component: AwardsComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'timeline', component: TimelineComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'team', component: TeamComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: '**', component: PageNotFoundComponent }
    ]

  },
  { path: 'contact', component: ContactComponent },
  { path: 'enquiry', component: EnquiryComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NavbarModule,
    SidebarModule, FlexLayoutModule, 
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [HvaDashboardComponent],
  declarations: [HvaDashboardComponent, AboutUsComponent, PageNotFoundComponent, HomeComponent,
    ContactComponent,
    EnquiryComponent]
})
export class HvaModule { }
