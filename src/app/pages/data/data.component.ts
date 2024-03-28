import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  items:any[]| null = null;
  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.firestore
      .collection('Visas')
      .valueChanges().subscribe((res)=>{
        this.items = res;
        console.log(res);
      })
  }
}
