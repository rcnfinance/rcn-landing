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
    data: "Acquire RCN eligible lending currencies in exchanges, brokers or peer-to-peer platforms.",
    data2: "",
    data3: "",
    data4: "",
    data5: "",
    target1: "https://metamask.io/",
    target2: "",
    number: "1"},
    {icon: "../../../../assets/icons/2.svg", 
    title: "FUND THE ACCOUNT",
    data: "Download ",
    data2: "Metamask",
    data3: " plug-in for your browser and transfer funds to the wallet with no minimum amount.",
    data4: "",
    data5: "",
    target1: "",
    target2: "",
    number: "2"},
    {icon: "../../../../assets/icons/3.svg", 
    title: "START LENDING",
    data: "Access ",
    data2: "the platform",
    data3: ", complete ",
    data4: "Civic KYC",
    data5: " requirements and begin earning passive income.",
    target1: "https://rcn.loans/",
    target2: "https://www.civic.com/",
    number: "3"},
    ];

  constructor() { }

  ngOnInit() {
  }

}
