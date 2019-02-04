import { Component, OnInit } from '@angular/core';
import { AddPaymentServiceService } from './add-payment-service.service';
import { AddPayment } from './add-payment';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  constructor(private paymentService:AddPaymentServiceService) { }
  paymentObj:AddPayment = new AddPayment()
  payment:AddPayment[]
  ngOnInit() {
    this.getAllPaymentDetails()
  }
  addpaymentdetails(){
    return this.paymentService.addPaymentDetails(this.paymentObj).subscribe(data=>{
      console.log(data);
      // alert("sadsfdb")
    })
  }
  getAllPaymentDetails(){
    return this.paymentService.getPayment().subscribe(data=>{
      this.payment=data;
    })
  }

}
