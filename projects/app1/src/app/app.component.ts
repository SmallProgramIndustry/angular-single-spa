import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { loadMessages, locale } from 'devextreme/localization';
import 'devextreme-intl';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  validateForm: FormGroup;
  public label = 'wahdskjhhad';
  public isShow = false;
  customers = [
    {
      ID: 1,
      CompanyName: 'Super Mart of the West',
      Address: '702 SW 8th Street',
      City: 'Bentonville',
      State: 'Arkansas',
      Zipcode: 72716,
      Phone: '(800) 555-2797',
      Fax: '(800) 555-2171',
      Website: 'http://www.nowebsitesupermart.com'
    },
    {
      ID: 2,
      CompanyName: 'Super Mart of the West',
      Address: '702 SW 8th Street',
      City: 'Bentonville',
      State: 'Arkansas',
      Zipcode: 72716,
      Phone: '(800) 555-2797',
      Fax: '(800) 555-2171',
      Website: 'http://www.nowebsitesupermart.com'
    },
    {
      ID: 3,
      CompanyName: 'Super Mart of the West',
      Address: '702 SW 8th Street',
      City: 'Bentonville',
      State: 'Arkansas',
      Zipcode: 72716,
      Phone: '(800) 555-2797',
      Fax: '(800) 555-2171',
      Website: 'http://www.nowebsitesupermart.com'
    },
    {
      ID: 4,
      CompanyName: 'Super Mart of the West',
      Address: '702 SW 8th Street',
      City: 'Bentonville',
      State: 'Arkansas',
      Zipcode: 72716,
      Phone: '(800) 555-2797',
      Fax: '(800) 555-2171',
      Website: 'http://www.nowebsitesupermart.com'
    },
    {
      ID: 5,
      CompanyName: 'Super Mart of the West',
      Address: '702 SW 8th Street',
      City: 'Bentonville',
      State: 'Arkansas',
      Zipcode: 72716,
      Phone: '(800) 555-2797',
      Fax: '(800) 555-2171',
      Website: 'http://www.nowebsitesupermart.com'
    },
  ];

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private http: HttpClient,
    public route: ActivatedRoute,
    private zone: NgZone
  ) { }

  async ngOnInit(): Promise<void> {
    // const url = `./dx-locales/zh.json`;
    // const messages = await this.http.get(url).toPromise();
    // loadMessages(messages);
    // locale('zh');
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
    this.isShow = true;
  }

  submitForm(): void {

    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const d = this.validateForm.value;
    if (d.userName === '123' && d.password === '123') {
      this.zone.run(() =>
        this.router.navigate(
          ['/app2'],
          { relativeTo: this.route }
        )
      );
    }
  }

  a() {
    this.zone.run(() =>
      this.router.navigate(
        ['/app2'],
        { relativeTo: this.route }
      )
    );
  }

  ngOnDestroy() {
    // setTimeout(() => {
    //   window.document.getElementsByTagName('app1-root')[0].remove();
    // }, 1);
  }

}
