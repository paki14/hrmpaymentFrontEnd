import { Component, OnInit } from '@angular/core';
import { TrainingScheduleService } from '../add-training-schedule/training-schedule.service';
import { AddTrainingSchedule } from '../add-training-schedule/add-training-schedule';

@Component({
  selector: 'app-hr-view-of-payment',
  templateUrl: './hr-view-of-payment.component.html',
  styleUrls: ['./hr-view-of-payment.component.css']
})
export class HrViewOfPaymentComponent implements OnInit {
  constructor(private trainingScheduleService:TrainingScheduleService) { }
  trainingSchedule:AddTrainingSchedule[]
  trainingScheduleObj:AddTrainingSchedule = new AddTrainingSchedule()
  ngOnInit() {
    this.gettrainingSchedule()
    
  }
  gettrainingSchedule(){
    return this.trainingScheduleService.gettrainingSchedule().subscribe(data=>{
      this.trainingSchedule=data
      console.log(data);
    })
  }
  paymentProcess(data){
    this.trainingScheduleObj=Object.assign({},data)
    this.trainingScheduleObj.trainer=1
    this.trainingScheduleObj.date = new Date(this.trainingScheduleObj.date);
    return this.trainingScheduleService.addPaymentProcess(this.trainingScheduleObj).subscribe(data=>{
      console.log(data);
      this.gettrainingSchedule()
      // alert("h")
    })
  }

  getId(data){
    this.trainingScheduleObj=Object.assign({},data)
    // alert(this.trainingScheduleObj.id)
    // this.paymentProcess();
  }

}
