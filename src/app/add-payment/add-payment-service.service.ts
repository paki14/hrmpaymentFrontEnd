import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AddPayment } from './add-payment';
const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AddPaymentServiceService {

  constructor(private httpObj:HttpClient) { }
  private paymentUrl = "http://localhost:8001/hrm_system/paymentprocess";

  getPayment(){
    return this.httpObj.get<AddPayment[]>(this.paymentUrl);
  }
  addPaymentDetails(data){
    return this.httpObj.post<AddPayment>(this.paymentUrl,data)
  }
  getPaymentDetailByTrainingScheduleId(data){
    return this.httpObj.get<AddPayment>(this.paymentUrl+"/"+data)
  }
  editPayment(data){
    return this.httpObj.put<AddPayment>(this.paymentUrl+"/"+data,data)
  }
}
