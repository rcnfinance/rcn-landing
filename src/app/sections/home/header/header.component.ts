import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  content = [{title: "RCN",
              img: "../../../../assets/img/1_T6A9296_.jpg",
              imgMobile: "../../../../assets/img/slide1-home_mobile.jpg"}];
  counter = 0;
  hidden = false;

  constructor(private router: Router) { }

  hide(){
    this.hidden = true;
  }

  navigate(){
    this.router.navigate(['how-it-works']);
  }

  changingContent(){
    if (this.counter == 0) {
    this.content = [{title: "RCN",
                    img: "../../../../assets/img/1_T6A9296_.jpg",
                    imgMobile: "../../../../assets/img/slide1-home_mobile.jpg"}];
    } else if (this.counter == 1) {
      this.content = [{title: "BLOCKCHAIN GLOBAL LENDING",
                      img: "../../../../assets/img/1_T6A9296_.jpg",
                      imgMobile: "../../../../assets/img/slide1-home_mobile.jpg"}];
    } else {
      this.content = [{title: "FRICTIONLESS DEBT MARKETS",
                      img: "../../../../assets/img/1_T6A9296_.jpg",
                      imgMobile: "../../../../assets/img/slide1-home_mobile.jpg"}];
    }
  }

  left(){
    this.counter--
    if (this.counter < 0) {
      this.counter = 0
    }
    this.changingContent()  
  }

  right(){
    this.counter++
    if (this.counter > 2) {
      this.counter = 2
    }
    this.changingContent()
  }



  ngOnInit() {
  }

}
