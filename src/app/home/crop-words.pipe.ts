import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cropWords',
})
export class CropWordsPipe implements PipeTransform {
  transform(str: string, length): string {
    return str.length <= length ? str : str.substring(0, length - 3) + '...';
  }
}
