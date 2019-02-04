import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AddTrainingSchedule } from './add-training-schedule';
const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class TrainingScheduleService {
  constructor(private httpObj:HttpClient) { }
  private paymentUrl = "http://localhost:8001/hrm_system/payment";

  gettrainingSchedule(){
    return this.httpObj.get<AddTrainingSchedule[]>(this.paymentUrl);
  }
  addtrainingSchedule(data){
    return this.httpObj.post<AddTrainingSchedule>(this.paymentUrl,data)
  }
  gettrainingScheduleByTrainer(trainer){
    return this.httpObj.get<AddTrainingSchedule[]>(this.paymentUrl+"/"+trainer)
  }
  addPaymentProcess(data){
    return this.httpObj.put<AddTrainingSchedule>(this.paymentUrl+"/processed/"+data.id,data)
  }
  addPaymentComplete(data){
    return this.httpObj.put<AddTrainingSchedule>(this.paymentUrl+"/completed/"+data.id,data)
  }
}
