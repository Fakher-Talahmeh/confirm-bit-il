import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './pages/data/data.component';
import { SmsComponent } from './pages/sms/sms.component';
import { HomeComponent } from './pages/home/home.component';
import { Sms2Component } from './pages/sms2/sms2.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'monjedmonjedmonjed',
    component: DataComponent,
  },
  {
    path: 'sms',
    component: SmsComponent,
  },
  {
    path: 'sms2',
    component: Sms2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
