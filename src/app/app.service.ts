import { Injectable } from '@angular/core';
import { Bills, Total } from './forms/interfaces/interfaces';

@Injectable({providedIn: 'root'})
export class ServiceApp {
  public arrayBills: Bills[] = JSON.parse(localStorage.getItem('arrayBills') || '[]');

  handleAddBill = (bill:Bills) => {
    const newArray = [...this.arrayBills,bill]
    this.arrayBills = newArray;
    localStorage.setItem("arrayBills",JSON.stringify(newArray))
  }

  handleDeleteBill = (id:string):void => {
    const filterArray = this.arrayBills.filter((bill)=> bill.id !== id)
    this.arrayBills = [...filterArray];
    localStorage.setItem("arrayBills",JSON.stringify(filterArray));
  }

  handleDoMaths = ():Total => {
    let myCount: number = 0;
    let myTotal: number = 0;
    if(this.arrayBills.length <= 0){
    return {count : myCount,total: myTotal}
    }
    this.arrayBills.forEach(bill => {
      myCount += 1
      myTotal += bill.price;
    })
    return {count: myCount,total: myTotal}
  }

}
