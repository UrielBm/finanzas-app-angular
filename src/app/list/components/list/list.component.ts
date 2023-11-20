import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Bills, Total } from '../../../forms/interfaces/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list-reset.component.css','./list.component.scss']
})
export class ListComponent {
  @Output()
  public onDeleteBill: EventEmitter<string> = new EventEmitter();
  @Input()
  public list: Bills[] = []
  @Input()
  public total: Total = {
    count: 0,
    total: 0
  }
  onSetDeleteItem = (id?:string): void => {
    if(!id) return;
    this.onDeleteBill.emit(id)
  }
}
