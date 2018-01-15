import { Component, OnInit } from '@angular/core';
import {} from './sidenav-content/sidenav-content.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any;
  sideBar: any;
  constructor() {
  }

  ngOnInit() {

    this.menuItems = [{
      title: "Dashboard",
      icon: "dashboard",
      state: "dashboard"
    },{
      title: "Services",
      icon: "flash",
      state: "services"
    },
    {
      title: "Projects",
      icon: "file-code-o",
      state: "projects"
    },{
      title: "Timeline",
      icon: "eye",
      state: "timeline"
    },
    {
      title: "Customers",
      icon: "handshake-o",
      state: "customers"
    },
    {
      title: "Experience",
      icon: "suitcase",
      state: "experience"
    },
    {
      title: "Awards",
      icon: "certificate",
      state: "awards"
    } ,{
      title: "Our Team",
      icon: "group",
      state: "team"
    }      
    ];
  }
}
