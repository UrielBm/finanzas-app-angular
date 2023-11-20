import { NgModule } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule,FormsModule],
  exports: [FormComponent],
  declarations: [FormComponent],
  providers: [],
})
export class MyFormModule { }
