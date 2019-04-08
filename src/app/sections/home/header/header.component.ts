import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hidden = false;

  constructor(private router: Router) { }

  hide(){
    this.hidden = true;
  }

  navigate(){
    this.router.navigate(['how-it-works']);
  }

  ngOnInit() {
  }

}
