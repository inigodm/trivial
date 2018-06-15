import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'decodeHtmlString'})
export class DecodeHtmlString implements PipeTransform {
    transform(value: string): String {
        const tempElement = document.createElement('div');
        tempElement.innerHTML = value;
        // const ss = new DOMParser();
        // return ss.parseFromString(value, 'text/html').;
         return tempElement.innerText;
    }
}
