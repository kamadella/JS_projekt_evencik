import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plDate'
})
export class PlDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    //console.log(typeof value);
    const dt = new Date(value);
    const dateStr=dt.toDateString();
    const dateTab = dateStr.split(' ');
    let datePlForm = '';
    switch (dateTab[1]) {
      case 'Jan': dateTab[1] = 'stycznia'; break;
      case 'Oct': dateTab[1] = 'pażdziernika'; break;
      case 'Apr': dateTab[1] = 'kwietnia'; break;
    }
    datePlForm=dateTab[2]+' '+dateTab[1]+' '+dateTab[3]

    return datePlForm;
  }
}


