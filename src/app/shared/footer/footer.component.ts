import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  addClass(net) {
    let element = document.getElementById(net);
    element.classList.add("bounce");
    setTimeout(function(){ 
      element.classList.remove("bounce"); 
    }, 1000);
    }

  ngOnInit() {
  }

}
