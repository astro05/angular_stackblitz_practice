import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EnglishToBanglaDigitConversionComponent } from './english-to-bangla-digit-conversion/english-to-bangla-digit-conversion.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    EnglishToBanglaDigitConversionComponent,

  ],
  bootstrap:[
    AppComponent,
  ],
  providers:[
    
  ]
})
export class AppModule { }