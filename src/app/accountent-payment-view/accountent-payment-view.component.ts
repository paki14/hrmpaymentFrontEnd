import { Component, OnInit } from '@angular/core';
import { TrainingScheduleService } from '../add-training-schedule/training-schedule.service';
import { AddTrainingSchedule } from '../add-training-schedule/add-training-schedule';

@Component({
  selector: 'app-accountent-payment-view',
  templateUrl: './accountent-payment-view.component.html',
  styleUrls: ['./accountent-payment-view.component.css']
})
export class AccountentPaymentViewComponent implements OnInit {

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
    // alert(this.trainingScheduleObj.id)
    // this.paymentProcess();
  }

}
