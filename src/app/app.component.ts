import { Component, TrackByFunction } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';

import { ColumnMove, SortParams, TableHeader } from './components/table/table.model';
import { StoreService } from './store/store.service';
import { CommentItem } from './models/comment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly items$ = this.storeService.items$;
  readonly itemsCallState$ = this.storeService.itemsCallState$;
  readonly searchValue$ = this.storeService.searchValue$;
  readonly headers: TableHeader<CommentItem>[] = [
    {
      key: 'id',
      title: 'Id',
    },
    {
      key: 'name',
      title: 'Name',

    },
    {
      key: 'email',
      title: 'Email',

    },
    {
      key: 'body',
      title: 'Body',
    }
  ];

  readonly trackByItemId: TrackByFunction<CommentItem> = (index, item) => item.id;

  constructor(private readonly storeService: StoreService) {
    this.storeService.loadItems();
  }

  onFilterChanges(searchValue: string): void {
    this.storeService.updateSearch(searchValue);
  }

  onMoveColumns({previousIndex, currentIndex}: ColumnMove): void {
    moveItemInArray(this.headers, previousIndex, currentIndex);
  }

  onSort(sortParams: SortParams<CommentItem>): void {
    this.storeService.updateSort(sortParams);
  }
}
