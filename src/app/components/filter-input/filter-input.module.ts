import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterInputComponent } from './filter-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FilterInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FilterInputComponent]
})
export class FilterInputModule {}
