import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'english-to-bangla-digit-conversion',
  templateUrl: './english-to-bangla-digit-conversion.component.html',
  styleUrls: ['./english-to-bangla-digit-conversion.component.css'],
})
export class EnglishToBanglaDigitConversionComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log(this.toBanglaDigit('6789.89')); //৬৭৮৯.৮৯
    console.log(this.toBanglaDigit('The Number is: 6789.89')); //The Number is: ৬৭৮৯.৮৯
    console.log(this.toBanglaDigit('0123456789.89')); //০১২৩৪৫৬৭৮৯.৮৯
    console.log(this.toBanglaDigit('0123456789')); //০১২৩৪৫৬৭৮৯
    console.log(this.toBanglaDigit('1234'));
    console.log(this.toBanglaDigit('90123456789'));

    console.log(this.toEnglishDigit('The Number is: ৬৭৮৯.৮৯'));
  }

  //eng to bangla digit convert
  toBanglaDigit(n): string {
    return n.replace(/\d/g, (d) => '০১২৩৪৫৬৭৮৯'[d]);
  }

  //bangla to english digit convert
  toEnglishDigit(n): string {
    return n.replace(/[০-৯]/g, (d) => '০১২৩৪৫৬৭৮৯'.indexOf(d));
  }
}
