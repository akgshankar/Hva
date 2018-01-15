import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent implements OnInit {
  skills: any;
  constructor() { }

  ngOnInit() {
     //skills progress bar
    this.skills = [
      {
        title: "Design & Development",
        theme: "aqua",
        percentage: 80
      },
      {
        title: "Communication",
        theme: "red",
        percentage: 83
      },
      {
        title: "Planning & Progressing",
        theme: "green",
        percentage: 75
      },
      {
        title: "Problem Solving",
        theme: "yellow",
        percentage: 85
      },
      {
        title: "Loyal & Dedication",
        theme: "aqua",
        percentage: 100
      },
      {
        title: "Fun & Friendly",
        theme: "green",
        percentage: 95
      } 
    ];
  }

}
