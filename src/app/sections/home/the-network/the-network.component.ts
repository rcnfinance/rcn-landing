import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-the-network',
  templateUrl: './the-network.component.html',
  styleUrls: ['./the-network.component.scss']
})
export class TheNetworkComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
