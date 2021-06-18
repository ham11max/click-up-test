import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe<T> implements PipeTransform {

  transform(items: T[], searchValue: string): T[] {
    if (!searchValue) {
      return items;
    }

    const searchInLowerCase = searchValue.toLowerCase();

    return items
      .filter((item) => Object
        .values(item)
        .some(value => String(value)
          .toLowerCase()
          .includes(searchInLowerCase)));
  }
}
