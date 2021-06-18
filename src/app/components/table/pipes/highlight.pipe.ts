import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value = '', searchValue?: string): string {
    if (!searchValue) {
      return value;
    }

    const regex = new RegExp(searchValue, 'i');

    return regex.test(value) ?
      value.replace(regex, `<mark>$&</mark>`) :
      value;
  }
}
