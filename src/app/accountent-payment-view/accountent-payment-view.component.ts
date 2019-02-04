import { Component, OnInit } from '@angular/core';
import { TrainingScheduleService } from '../add-training-schedule/training-schedule.service';
import { AddTrainingSchedule } from '../add-training-schedule/add-training-schedule';
import { AddPaymentServiceService } from '../add-payment/add-payment-service.service';
import { AddPayment } from '../add-payment/add-payment';

@Component({
  selector: 'app-accountent-payment-view',
  templateUrl: './accountent-payment-view.component.html',
  styleUrls: ['./accountent-payment-view.component.css']
})
export class AccountentPaymentViewComponent implements OnInit {

  constructor(private trainingScheduleService:TrainingScheduleService,private paymentService:AddPaymentServiceService) { }
  trainingSchedule:AddTrainingSchedule[]
  trainingScheduleByID:AddTrainingSchedule
  trainingScheduleObj:AddTrainingSchedule = new AddTrainingSchedule()
  paymentObj:AddPayment = new AddPayment()
  ngOnInit() {
    this.getTrainingSchedule()
    
  }
  getTrainingSchedule(){
    return this.trainingScheduleService.gettrainingSchedule().subscribe(data=>{
      this.trainingSchedule=data
      console.log(data);
    })
  }
  addpaymentdetails(){
    
    this.paymentObj.amount=this.trainingScheduleByID.amounToPaid
    this.paymentObj.dateOfPayment=this.trainingScheduleByID.date
    this.paymentObj.trainingSchedule=this.trainingScheduleByID.id
    return this.paymentService.addPaymentDetails(this.paymentObj).subscribe(data=>{
      console.log(data);
      // alert("sadsfdb")
      this.getTrainingSchedule()
    })
  }
  getTrainingScheduleById(data){
    this.trainingScheduleObj=Object.assign({},data)
    return this.trainingScheduleService.gettrainingScheduleByTrainer(this.trainingScheduleObj).subscribe(data=>{
      this.trainingScheduleByID=data;
      console.log(data)
      this.getTrainingSchedule()
    })
  }

  // paymentCompleted(data){
  //   this.trainingScheduleObj=Object.assign({},data)
  //   this.trainingScheduleObj.trainer=1
  //   this.trainingScheduleObj.date = new Date(this.trainingScheduleObj.date);
  //   return this.trainingScheduleService.addPaymentComplete().subscribe(data=>{
  //     console.log(data);
  //     this.gettrainingSchedule()
  //     // alert("h")
  //   })
  // }

  getId(data){
    this.trainingScheduleObj=Object.assign({},data)
    alert(this.trainingScheduleObj.id)
    // this.paymentProcess();
  }

}
