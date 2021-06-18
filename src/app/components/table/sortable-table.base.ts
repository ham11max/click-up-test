import { SortColumnDirective } from './directives/sort-column.directive';
import { Directive, EventEmitter, Output } from '@angular/core';
import { SortParams } from './table.model';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class SortableTable<T> {
  @Output() sort = new EventEmitter<SortParams<T>>();

  protected sortColumns = new Set<SortColumnDirective<T>>();

  registerSortColumn(column: SortColumnDirective<T>): void {
    this.sortColumns.add(column);
  }

  unRegisterSortColumn(column: SortColumnDirective<T>): void {
    this.sortColumns.delete(column);
  }

  onSort(sortParams: SortParams<T>): void {
    this.sortColumns.forEach((column) => {
      if (column.columnKey !== sortParams.column) {
        column.direction = '';
      }
    });
    this.sort.emit(sortParams);
  }
}
