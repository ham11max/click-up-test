import { CallState } from '../models/call-state.model';
import { CommentItem } from '../models/comment.model';
import { SortParams } from '../components/table/table.model';

export interface StoreState {
  items: CommentItem[];
  itemsCallState: CallState;
  searchValue: string;
  sortParams: SortParams<CommentItem>;
}
