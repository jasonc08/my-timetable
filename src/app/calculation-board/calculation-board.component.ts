import { numKey } from './../../typings/numKey.d';
import { letterKey } from './../../typings/letterKey.d';
import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-calculation-board',
  templateUrl: './calculation-board.component.html',
  styleUrls: ['./calculation-board.component.scss']
})
export class CalculationBoardComponent implements OnInit {

  constructor() { }
  code: string;
  num: number;
  letter1: string;
  letter2: string;
  startTime: string;
  endTime: string;
  letterKeys: letterKey[];
  numKeys: numKey[];
  ngOnInit(): void {
    const charCodeA = 'A'.charCodeAt(0);
    const charCodeX = 'X'.charCodeAt(0);
    this.letterKeys = [];
    for (let i = charCodeA; i <= charCodeX; i++) {
      this.letterKeys.push({
        code: i,
        key: String.fromCharCode(i)
      });
    }
    this.numKeys = [];
    for (let i = 1; i <= 4; i++) {
      this.numKeys.push({
        num: i
      });
    }
  }
  codeOnChange(): void {
    this.calculate();
  }

  numClick(num: number): void {
    this.num = num;
    if(this.num && this.letter1 && this.letter2){
      this.code = this.num + this.letter1 + this.letter2;
      this.calculate();
    }
  }
  letter1Click(code: number) : void{
    this.letter1 = String.fromCharCode(code);
    if(this.num && this.letter1 && this.letter2){
      this.code = this.num + this.letter1 + this.letter2;
      this.calculate();
    }
  }
  letter2Click(code: number): void {
    this.letter2 =  String.fromCharCode(code);
    if(this.num && this.letter1 && this.letter2){
      this.code = this.num + this.letter1 + this.letter2;
      this.calculate();
    }
  }
  calculate(): void {
    const pattern = RegExp('^([0-9])([a-xA-X])([a-xA-X])$');
    const match = pattern.exec(this.code);
    if (match) {
      const time = dayjs('2020-01-01 00:00:00');
      const charCodeA = 'A'.charCodeAt(0);
      const charCodeX = 'X'.charCodeAt(0);
      this.num = +match[1];
      this.letter1 = match[2].toUpperCase();
      this.letter2 = match[3].toUpperCase();

      const indexOfLetter1 = this.letter1.charCodeAt(0) - charCodeA;
      const indexOfLetter2 = this.letter2.charCodeAt(0) - charCodeA;

      const dd = time.add(15 * indexOfLetter1 + (this.num - 1) * (charCodeX - charCodeA + 1) * 15, 'minute');
      const ee = dd.add(30 + 30 * indexOfLetter2, 'minute');
      this.startTime = dd.format('HH:mm');
      this.endTime = ee.format('HH:mm');

    }
    else {
      this.startTime = '';
      this.endTime = '';
    }
  }
}
