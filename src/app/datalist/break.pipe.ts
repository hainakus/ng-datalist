import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'break'
})
export class BreakPipe implements PipeTransform {

  transform(value: string, length = 35): string {
    if(value.length <= length) {
        return value;
    } else {
      var yardstick = new RegExp(`.{${length}}`, 'g');
      var pieces:any = value.match(yardstick);
      var accumulated = (pieces.length * length);
      var modulo = value.length % accumulated;
      if (modulo) pieces.push(value.slice(accumulated));	

      console.log(pieces);
      var text = '';
      for (var i = 0; i < pieces.length; i++) { 
          text += pieces[i] + '</br> ';
      }
      return text;
    }
  }

}
