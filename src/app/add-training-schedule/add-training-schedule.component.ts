import { Component, OnInit } from '@angular/core';
import { AddPaymentServiceService } from '../add-payment/add-payment-service.service';
import { AddPayment } from '../add-payment/add-payment';
import { TrainingScheduleService } from './training-schedule.service';
import { AddTrainingSchedule } from './add-training-schedule';


@Component({
  selector: 'app-add-training-schedule',
  templateUrl: './add-training-schedule.component.html',
  styleUrls: ['./add-training-schedule.component.css']
})
export class AddTrainingScheduleComponent implements OnInit {

  constructor(private trainingScheduleService:TrainingScheduleService) { }
  trainingScheduleObj:AddTrainingSchedule = new AddTrainingSchedule()
  ngOnInit() {
  }
  addtrainingSchedule(){
    return this.trainingScheduleService.addtrainingSchedule(this.trainingScheduleObj).subscribe(data=>{
      console.log(data);
    })
  }
  
}
