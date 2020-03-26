import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app2';
  ngOnInit() {
    console.log(1);
  }
  ngOnDestroy() {
    console.log(2);
  }
}
