import { Component, OnInit } from '@angular/core';
import { AddPaymentServiceService } from '../add-payment/add-payment-service.service';
import { AddPayment } from '../add-payment/add-payment';

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.css']
})
export class ViewPaymentComponent implements OnInit {
  constructor(private paymentService:AddPaymentServiceService) { }
  paymentObj:AddPayment = new AddPayment()
  payment:AddPayment[]
  ngOnInit() {
    this.getAllPaymentDetails()
  }
  addpaymentdetails(){
    return this.paymentService.addPaymentDetails(this.paymentObj).subscribe(data=>{
      console.log(data);
    })
  }
  getAllPaymentDetails(){
    return this.paymentService.getPayment().subscribe(data=>{
      this.payment=data;
    })

}
}
