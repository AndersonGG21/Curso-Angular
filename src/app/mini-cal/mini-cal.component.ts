import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-cal',
  templateUrl: './mini-cal.component.html',
  styleUrls: ['./mini-cal.component.css']
})
export class MiniCalComponent {
  number1: string = '0';
  number2: string = '0';
  res: number = 0;

  sum():void{
    this.res = parseInt(this.number1) + parseInt(this.number2);
  }

  rest():void{
    this.res = parseInt(this.number1) - parseInt(this.number2);
  }

  mul():void{
    this.res = parseInt(this.number1) * parseInt(this.number2);
  }
}
