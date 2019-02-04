import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { AddTrainingSchedule } from './add-training-schedule/add-training-schedule';
import { ViewTrainingScheduleComponent } from './view-training-schedule/view-training-schedule.component';
import { AddTrainingScheduleComponent } from './add-training-schedule/add-training-schedule.component';
import { HrViewOfPaymentComponent } from './hr-view-of-payment/hr-view-of-payment.component';
import { AccountentPaymentViewComponent } from './accountent-payment-view/accountent-payment-view.component';


const routes: Routes = [
  {path: 'addPayment', component:AddPaymentComponent},
  {path: 'viewPayment', component:ViewPaymentComponent},
  {path: 'addTraining', component:AddTrainingScheduleComponent},
  {path: 'PaymentHistory', component:ViewTrainingScheduleComponent},
  {path: 'sendProcess', component:HrViewOfPaymentComponent},
  {path: 'senddeposit', component:AccountentPaymentViewComponent},
  

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
