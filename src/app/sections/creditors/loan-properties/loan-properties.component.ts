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
    title2: "DURATION",
    data2: "90 Days",
    icon3: "fas fa-chart-line", 
    title3: "COSIGNER",
    data3: "Financial Institution"},
    {icon: "fas fa-user", 
    title: "STATUS",
    data: "Requested",
    icon2: "fas fa-chart-line", 
    title2: "APR",
    data2: "~ 10 %",
    icon3: "fas fa-chart-line", 
    title3: "PUNITORY",
    data3: "~ 15 %"},
    {icon: "fas fa-user", 
    title: "BORROWING AMOUNT",
    data: "475",
    icon2: "fas fa-chart-line", 
    title2: "BORROWING CURRENCY",
    data2: "USD",
    icon3: "fas fa-chart-line", 
    title3: "GUARANTEED RETURN",
    data3: "486.88"},
    {icon: "fas fa-user", 
    title: "LENDING AMOUNT",
    data: "15800",
    icon2: "fas fa-chart-line", 
    title2: "LENDING CURRENCY",
    data2: "RCN",
    icon3: "fas fa-chart-line", 
    title3: "EXPECTED RETURN",
    data3: "16195"},   
    ];

  constructor() { }

  ngOnInit() {
  }

}
