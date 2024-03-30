import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sms2',
  templateUrl: './sms2.component.html',
  styleUrls: ['./sms2.component.scss'],
})
export class Sms2Component {
  otp: string = '';
  constructor(private router: Router) {}
  onSubmit() {
    if (this.otp != '') {
      window.location.href = 'https://www.bitpay.co.il/he';

    }
  }
}
