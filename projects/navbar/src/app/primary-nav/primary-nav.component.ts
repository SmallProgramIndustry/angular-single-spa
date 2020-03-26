import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'navbar-primary-nav',
  templateUrl: './primary-nav.component.html',
  styleUrls: ['./primary-nav.component.css']
})
export class PrimaryNavComponent implements OnInit {

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private zone: NgZone
  ) { }

  ngOnInit() {
  }
  go(v: any) {
    this.zone.run(() =>
      this.router.navigate(
        [v],
        { relativeTo: this.route }
      )
    ).then();
  }

}
