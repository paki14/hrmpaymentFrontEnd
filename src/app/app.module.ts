import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddPaymentComponent } from './add-payment/add-payment.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddTrainingScheduleComponent } from './add-training-schedule/add-training-schedule.component';
import { ViewTrainingScheduleComponent } from './view-training-schedule/view-training-schedule.component'

import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { HrViewOfPaymentComponent } from './hr-view-of-payment/hr-view-of-payment.component';
import { AccountentPaymentViewComponent } from './accountent-payment-view/accountent-payment-view.component';

@NgModule({
  declarations: [
    AppComponent, AddPaymentComponent, ViewPaymentComponent, AddTrainingScheduleComponent, ViewTrainingScheduleComponent, HrViewOfPaymentComponent, AccountentPaymentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
