import { createAction, props } from '@ngrx/store';

import { CommentItem } from '../models/comment.model';
import { SortParams } from '../components/table/table.model';

export const loadItems = createAction('[API] Load items');
export const loadItemsSuccess = createAction('[API] Load items succeed', props<{ items: CommentItem[] }>());
export const loadItemsError = createAction('[API] Load items error');

export const updateSearch = createAction('[AppComponent] update search value', props<{ value: string }>());
export const updateSort = createAction('[AppComponent] update sort params', props<{ sortParams: SortParams<CommentItem> }>());
