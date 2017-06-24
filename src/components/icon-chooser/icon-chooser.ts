import { SymbolService } from './../../services/symbol.service';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { SymbolDetail } from "../../models/symbol-detail";


/**
 * Generated class for the IconChooser component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'icon-chooser',
  templateUrl: 'icon-chooser.html'
})
export class IconChooser {


  public svgIcon: SafeHtml;

  constructor(private sanitizer: DomSanitizer, private symbolService: SymbolService) {
    this.symbolService.onChange.subscribe(symbol => this.showIcon(symbol));

    this.symbolService.load().then(x => this.symbolService.next());

    // setInterval(x => {
    //   this.symbolService.next();
    // }, 2000);
  }

  private showIcon(symbol: SymbolDetail): void {
    this.svgIcon = symbol.Symbol;
  }
}