import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TrackByFunction } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { ColumnMove, TableHeader } from './table.model';
import { SortableTable } from './sortable-table.base';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: SortableTable,
      useExisting: TableComponent,
    },
  ],
})
export class TableComponent<T> extends SortableTable<T> {
  @Input() items!: T[];
  @Input() headers!: TableHeader<T>[];
  @Input() trackByItemFn!: TrackByFunction<T>;
  @Input() searchValue!: string;

  @Output() moveColumns = new EventEmitter<ColumnMove>();


  trackByHeaderKey(index: number, item: TableHeader<T>): keyof T {
    return item.key;
  }

  moveItems({currentIndex, previousIndex}: CdkDragDrop<T>): void {
    if (currentIndex !== previousIndex) {
      this.moveColumns.emit({currentIndex, previousIndex});
    }
  }
}
