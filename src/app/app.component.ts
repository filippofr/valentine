import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  style = {};
  
  url1 = "../assets/images/love-cat.gif";
  url2 = "../assets/images/love2-cat.gif";

  imgurl = this.url1;

  yesClicked = false;

  changePosition() {
    var x = Math.floor(Math.random() * 100);
    var y = Math.floor(Math.random() * 100);
    this.style = { top: y + 'vh', left: x + 'vw' };
  }

  accept() {
    this.yesClicked = true;
    this.imgurl = this.url2;
  }
}
