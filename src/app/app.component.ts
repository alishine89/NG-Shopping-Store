import { Component } from '@angular/core';

@Component({
  selector: 'app',
  //template: "<store></store>",
  template:  "<router-outlet></router-outlet>",
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ali Hamza Store';

}
