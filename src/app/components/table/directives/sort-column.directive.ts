import { Directive, HostBinding, HostListener, Input, OnDestroy } from '@angular/core';
import { SortDirection } from '../table.model';
import { SortableTable } from '../sortable-table.base';

// tslint:disable:no-input-rename
@Directive({
  selector: 'th[appSortColumn]'
})
export class SortColumnDirective<T> implements OnDestroy {
  private readonly directionRotateConfig: { [key: string]: SortDirection } = {asc: 'desc', desc: '', '': 'asc'};

  @Input('appSortColumn') columnKey!: keyof T;
  @Input('appSortColumnDirection') direction: SortDirection = '';

  @HostBinding('class.table__cell--sortable') sortable = true;

  @HostBinding('class.asc')
  get asc(): boolean {
    return this.direction === 'asc';
  }

  @HostBinding('class.desc')
  get desc(): boolean {
    return this.direction === 'desc';
  }

  constructor(private readonly sortableTable: SortableTable<T>) {
    this.sortableTable.registerSortColumn(this);
  }

  @HostListener('click')
  onSort(): void {
    if (this.columnKey) {
      this.direction = this.directionRotateConfig[this.direction];
      this.sortableTable.onSort({column: this.columnKey, direction: this.direction});
    }
  }

  ngOnDestroy(): void {
    this.sortableTable.unRegisterSortColumn(this);
  }
}
