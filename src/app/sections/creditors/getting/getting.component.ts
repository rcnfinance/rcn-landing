import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getting',
  templateUrl: './getting.component.html',
  styleUrls: ['./getting.component.scss']
})
export class GettingComponent implements OnInit {

  content = [
    {icon: "../../../../assets/icons/icon-borderless.png", 
    title: "GET CRYPTO",
    data: "Acquire RCN eligible lending currencies in exchanges, brokers or peer-to-peer platforms."},
    {icon: "../../../../assets/icons/icon-borderless.png", 
    title: "FUND THE ACCOUNT",
    data: "Download Metamask plug-in for your browser and transfer funds to the wallet with no minimum amount."},
    {icon: "../../../../assets/icons/icon-borderless.png", 
    title: "START LENDING",
    data: "Access the platform, complete Civic KYC requirements and begin earning passive income."},
    ];

  constructor() { }

  ngOnInit() {
  }

}
