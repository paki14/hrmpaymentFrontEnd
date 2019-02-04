import { Component, OnInit } from '@angular/core';
import { TrainingScheduleService } from '../add-training-schedule/training-schedule.service';
import { AddTrainingSchedule } from '../add-training-schedule/add-training-schedule';

@Component({
  selector: 'app-view-training-schedule',
  templateUrl: './view-training-schedule.component.html',
  styleUrls: ['./view-training-schedule.component.css']
})
export class ViewTrainingScheduleComponent implements OnInit {

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
  getId(data){
    this.trainingScheduleObj=Object.assign({},data)
    // alert(this.trainingScheduleObj.id)
  }
  paymentCompleted(){
    return this.trainingScheduleService.addPaymentComplete(this.trainingScheduleObj).subscribe(data=>{
      console.log(data);
      this.gettrainingSchedule()
    })
  }
}
