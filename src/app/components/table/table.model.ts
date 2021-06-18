import { CdkDragDrop } from '@angular/cdk/drag-drop';

export interface TableHeader<T> {
  key: keyof T;
  title: string;
}

export type ColumnMove  = Pick<CdkDragDrop<unknown>, 'previousIndex' | 'currentIndex'>;

export type SortDirection = 'asc' | 'desc' | '';

export interface SortParams<T> {
  column: keyof T;
  direction: SortDirection;
}
