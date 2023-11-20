import { Component,EventEmitter,Output } from '@angular/core';
import { Bills } from '../../interfaces/interfaces';
import {v4 as uuid} from 'uuid'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Output()
  public onAddBill: EventEmitter<Bills> = new EventEmitter();

  public bill: Bills = {
    description: '',
    price: 0
  }
  public alert: string = "";
  handleOnSubmit = ():void => {
    const {description,price} = this.bill;
    if(description.trim() === ""){
      this.alert = "No puedes colocar una descripción vacia."
      return;
    }
    if(description.length > 20) {
      this.alert = "La descripción no puede ser mayor a 20 caracteres."
      return;
    }
    if(price <= 0) {
      this.alert = "Tu gasto debe ser mayor a 0."
      return;
    }
    const myNewBill: Bills = {
      id: uuid(),
      description: description.trim(),
      price
    }
    this.onAddBill.emit(myNewBill)
    this.bill = {description: '', price: 0}
    this.alert = "";
  }
}
