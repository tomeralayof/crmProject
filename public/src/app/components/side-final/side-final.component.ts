import { Component, OnInit } from '@angular/core';

interface navItem{
  tite: string
  icon: string
  link?:string
}


@Component({
  selector: 'app-side-final',
  templateUrl: './side-final.component.html',
  styleUrls: ['./side-final.component.css']
})
export class SideFinalComponent implements OnInit {
  navItem: navItem[]= [
    {
      tite: "customer",
      icon: "fas fa-users",
      link: "customers",

    },
    {
      tite: "contacts",
      icon: "fas fa-address-book",
      link: "contacts",

    },
    {
      tite: "leades",
      icon: "fas fa-hand-point-up",
      link: "leads",

    },
    {
      tite: "report",
      icon: "fas fa-flag",
      link: "report",

    },
    {
      tite: "integrations",
      icon: "fab fa-stack-exchange",
      link:"integrations",
    },
    {
      tite: "year-end sale",
      icon: "fas fa-glass-cheers",
      link:"year-end sale",
    },
    {
      tite: "HTTP fetch",
      icon: "fas fa-glass-cheers",
      link:"http",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
