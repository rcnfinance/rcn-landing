import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getting',
  templateUrl: './getting.component.html',
  styleUrls: ['./getting.component.scss']
})
export class GettingComponent implements OnInit {

  content = [
    {icon: "../../../../assets/icons/1.svg", 
    title: "GET CRYPTO",
    data: "Acquire RCN eligible lending currencies in exchanges, brokers or peer-to-peer platforms."},
    {icon: "../../../../assets/icons/2.svg", 
    title: "FUND THE ACCOUNT",
    data: "Download Metamask plug-in for your browser and transfer funds to the wallet with no minimum amount."},
    {icon: "../../../../assets/icons/3.svg", 
    title: "START LENDING",
    data: "Access the platform, complete Civic KYC requirements and begin earning passive income."},
    ];

  constructor() { }

  ngOnInit() {
  }

}
