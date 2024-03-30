import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent {
  otp:string = "";
  constructor(private router:Router) {

  }
  onSubmit(){
    if (this.otp!= ""){
      this.router.navigate(['/sms2']);
    }
  }
}
