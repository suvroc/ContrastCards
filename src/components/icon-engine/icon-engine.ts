import { SymbolService } from './../../services/symbol.service';
import { Component } from '@angular/core';
import { ConfigService } from "../../services/config.service";

/**
 * Generated class for the IconEngine component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'icon-engine',
  templateUrl: 'icon-engine.html'
})
export class IconEngine {

  public turnTime: number = 30;

  constructor(private symbolService: SymbolService, private configService: ConfigService) {
    console.log('Hello IconEngine Component');

    this.turnTime = configService.timeConfig.value;
  }

  public nextSymbol() {
    if (this.symbolService) {
      this.symbolService.next();
    }
  }

  public previousSymbol() {
    if (this.symbolService) {
      this.symbolService.prev();
    }
  }

}
