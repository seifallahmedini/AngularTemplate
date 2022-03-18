import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'safeHtmlAndCss',
})
export class SafeHtmlAndCssPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(html:any):any {
    console.log(html);
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
