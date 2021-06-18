import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { SearchPipe } from './pipes/search.pipe';
import { TableComponent } from './table.component';
import { HighlightPipe } from './pipes/highlight.pipe';
import { FilterInputModule } from '../filter-input/filter-input.module';
import { SortColumnDirective } from './directives/sort-column.directive';

@NgModule({
  declarations: [TableComponent, SearchPipe, HighlightPipe, SortColumnDirective],
  imports: [CommonModule, DragDropModule, FilterInputModule],
  exports: [TableComponent]
})
export class TableModule {}
