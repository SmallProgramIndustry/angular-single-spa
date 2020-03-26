import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app1-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    private zone: NgZone
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
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
}
