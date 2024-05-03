import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, arg1?: any, arg2?: any): any {
    return value.toUpperCase() + ' ' + arg1 + ' ' + arg2;
  }

}
