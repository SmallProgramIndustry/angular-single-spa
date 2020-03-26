import { Component } from '@angular/core';
import { assetUrl } from '../single-spa/asset-url';
@Component({
  selector: 'app3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app3';
  yoshiUrl = assetUrl('yoshi.png');
}
