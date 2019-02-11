import { Component, OnInit } from '@angular/core';
import { TrainingScheduleService } from '../add-training-schedule/training-schedule.service';
import { AddTrainingSchedule } from '../add-training-schedule/add-training-schedule';
import { AddPaymentServiceService } from '../add-payment/add-payment-service.service';
import { AddPayment } from '../add-payment/add-payment';

@Component({
  selector: 'app-view-training-schedule',
  templateUrl: './view-training-schedule.component.html',
  styleUrls: ['./view-training-schedule.component.css']
})
export class ViewTrainingScheduleComponent implements OnInit {

  constructor(
    private trainingScheduleService:TrainingScheduleService,
    private paymentService:AddPaymentServiceService
    ) { }
  trainingSchedule:AddTrainingSchedule[]
  trainingScheduleObj:AddTrainingSchedule = new AddTrainingSchedule()
  ngOnInit() {
    this.gettrainingSchedule()
    // this.getpaymentByTrainingSchedule()
  }

  gettrainingSchedule(){
    return this.trainingScheduleService.gettrainingSchedule().subscribe(data=>{
      this.trainingSchedule=data
      console.log(data);
    })
  }
  getId(data){
    this.trainingScheduleObj=Object.assign({},data)
    // alert(this.trainingScheduleObj.id)
  }
  paymentCompleted(){
    this.trainingScheduleObj.id
    this.trainingScheduleObj.trainer=1
    this.trainingScheduleObj.date = new Date(this.trainingScheduleObj.date);
    return this.trainingScheduleService.addPaymentComplete(this.trainingScheduleObj).subscribe(data=>{
      console.log(data);
      this.gettrainingSchedule()
    })
  }
  paymentNotComplete(){
    this.trainingScheduleObj.id
    this.trainingScheduleObj.trainer=1
    this.trainingScheduleObj.date= new Date(this.trainingScheduleObj.date)
    return this.trainingScheduleService.addPaymentNotComplete(this.trainingScheduleObj).subscribe(data=>{
      console.log(data)
      this.gettrainingSchedule()
    })
  }
  payment:AddPayment
  num:number
  getTrainingScheduleId(data){
    this.trainingScheduleObj=Object.assign({},data)
    this.payment=Object.assign({},data)
    // alert(this.payment.id)
    this.num=this.payment.id;
    this.getpaymentByTrainingSchedule()
  }
  getpaymentByTrainingSchedule(){
    // alert("szvx")
    return this.paymentService.getPaymentDetailByTrainingScheduleId(this.num).subscribe(data=>{
      this.payment=data
      console.log(data)
      // this.gettrainingSchedule()
    })
  }
}
