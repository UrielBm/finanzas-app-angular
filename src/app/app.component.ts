import { Component } from '@angular/core';
import { ServiceApp } from './app.service';
import { Bills, Total } from './forms/interfaces/interfaces';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app-reset.component.css','./app.component.scss']
})
export class AppComponent {
  constructor(private ServiceApp: ServiceApp){}

  gethandleGetBills = ():Bills[] => {
    const myBills = [...this.ServiceApp.arrayBills]
    return myBills;
  }
  onAddBill = (bill: Bills):void => {
    this.ServiceApp.handleAddBill(bill)
  }
  onDeleteBill = (id: string):void => {
   this.ServiceApp.handleDeleteBill(id)
  }
  getTotalBill = ():Total => {
    const result: Total = this.ServiceApp.handleDoMaths();
    return {...result}
  }
}
