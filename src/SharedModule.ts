import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecodeHtmlString } from './htmldecoder';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ DecodeHtmlString ],
  exports:      [ DecodeHtmlString ]
})
export class SharedModule { }
