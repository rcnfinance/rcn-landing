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
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {icon: "../../../../assets/icons/icon-borderless.png", 
    title: "GET CRYPTO",
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {icon: "../../../../assets/icons/icon-borderless.png", 
    title: "GET CRYPTO",
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    ];

  constructor() { }

  ngOnInit() {
  }

}
