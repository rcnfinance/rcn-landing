import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-properties',
  templateUrl: './loan-properties.component.html',
  styleUrls: ['./loan-properties.component.scss']
})
export class LoanPropertiesComponent implements OnInit {


  content = [
    {icon: "fas fa-user", 
    title: "BORROWER",
    data: "ox2c...ef20",
    icon2: "fas fa-chart-line", 
    title2: "LENDING AMOUNT",
    data2: "2500"},
    {icon: "fas fa-user", 
    title: "BORROWER",
    data: "ox2c...ef20",
    icon2: "fas fa-chart-line", 
    title2: "LENDING AMOUNT",
    data2: "2500"},
    {icon: "fas fa-user", 
    title: "BORROWER",
    data: "ox2c...ef20",
    icon2: "fas fa-chart-line", 
    title2: "LENDING AMOUNT",
    data2: "2500"},
    {icon: "fas fa-user", 
    title: "BORROWER",
    data: "ox2c...ef20",
    icon2: "fas fa-chart-line", 
    title2: "LENDING AMOUNT",
    data2: "2500"},
    {icon: "fas fa-user", 
    title: "BORROWER",
    data: "ox2c...ef20",
    icon2: "fas fa-chart-line", 
    title2: "LENDING AMOUNT",
    data2: "2500"},
    {icon: "fas fa-user", 
    title: "BORROWER",
    data: "ox2c...ef20",
    icon2: "", 
    title2: "",
    data2: ""},
   
    ];

  constructor() { }

  ngOnInit() {
  }

}
