import { Injectable } from '@angular/core';
import {NumberType} from '../models/number-type';

@Injectable()
export class NumberConvertDropdownDataService {
   numberTypes: NumberType[]  = [
    {id: 1 , name: 'Decimal'},
    {id: 2 , name: 'Binary'}
  ];

   getNumberTypes(): NumberType[] {
    return this.numberTypes;
  }


}
