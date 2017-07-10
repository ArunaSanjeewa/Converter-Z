import { Component, OnInit } from '@angular/core';
import {NumberConvertDropdownDataService} from '../../services/number-convert-dropdown-data.service';
import { NumberType } from 'app/models/number-type';

@Component({
  selector: 'app-number-converter',
  templateUrl: './number-converter.component.html',
  styleUrls: ['./number-converter.component.css'],
  providers: [NumberConvertDropdownDataService],
})
export class NumberConverterComponent implements OnInit {
  numberTypes: NumberType[]= [];
  ngOnInit() {
    this.numberTypes = this.numberConvertDropDownDataService.getNumberTypes();

  }

  constructor(private numberConvertDropDownDataService: NumberConvertDropdownDataService) { }




}
