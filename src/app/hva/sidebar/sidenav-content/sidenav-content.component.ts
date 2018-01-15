import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.css']
})
export class SidenavContentComponent implements OnInit {
  mainData: any;  
  tools: any;
  constructor() { }

  ngOnInit() {

    this.mainData =[{
      title: "Projects",
      value: "40+",
      theme: "aqua",
      icon: "object-group"
    },
    {
      title: "Customers",
      value: "20+",
      theme: "red",
      icon: "users"
    },
    {
      title: "Cities",
      value: "10+",
      theme: "green",
      icon: "map-pin"
    },
    {
      title: "States",
      value: "2+",
      theme: "yellow",
      icon: "puzzle-piece"
    }];

   
    this.tools = [
      {
        Software: "Mongo DB",
        Percentage: "80",
        theme: "yellow",
        image: "mongodb"
      },
      {
        Software: "Express JS",
        Percentage: "75",
        theme: "aqua",
        image: "express",
        progressbar: "blue"
      },
      {
        Software: "Angular JS",
        Percentage: "85",
        theme: "green",
        image: "angular",
        progressbar: "blue"
      },
      {
        Software: "Node JS",
        Percentage: "83",
        theme: "lime",
        image: "node",
        progressbar: "blue"
      },
      {
        Software: "Javascript",
        Percentage: "80",
        theme: "maroon",
        image: "javascript",
        progressbar: "blue"
      },
      {
        Software: "Type Script",
        Percentage: "70",
        theme: "Gray",
        image: "typescript",
        progressbar: "blue"
      },
      {
        Software: "jQuery & AJAX",
        Percentage: "80",
        theme: "yellow",
        image: "jquery",
        progressbar: "blue"
      },
      {
        Software: "Joomla",
        Percentage: "85",
        theme: "red",
        image: "joomla",
        progressbar: "blue"
      },
      {
        Software: "HTML 5",
        Percentage: "90",
        theme: "yellow",
        image: "html5"
      },
      {
        Software: "CSS 3",
        Percentage: "83",
        theme: "aqua",
        image: "css3",
        progressbar: "blue"
      },
      {
        Software: "SAAS",
        Percentage: "72",
        theme: "green",
        image: "saas-css",
        progressbar: "blue"
      },
      {
        Software: "Bootstrap",
        Percentage: "85",
        theme: "lime",
        image: "bootstrap",
        progressbar: "blue"
      },
      {
        Software: "Photo Shop",
        Percentage: "90",
        theme: "maroon",
        image: "photoshop",
        progressbar: "blue"
      },
      {
        Software: "Corel Draw",
        Percentage: "95",
        theme: "Gray",
        image: "coreldraw",
        progressbar: "blue"
      },
      {
        Software: "Flash",
        Percentage: "65",
        theme: "yellow",
        image: "flash",
        progressbar: "blue"
      }
    ];

  }

}
