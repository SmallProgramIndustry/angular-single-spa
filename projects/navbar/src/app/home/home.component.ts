import { Component, OnInit } from '@angular/core';
import { assetUrl } from '../../single-spa/asset-url';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  array = [assetUrl('timg.gif'),
  assetUrl('timg (1).jfif'),
  assetUrl('9A1ED088-2891-49d1-A2AA-8C18AB0FFF14.jpg'),
  assetUrl('timg.jfif')
  ];
  constructor() { }

  ngOnInit() {
  }

}
