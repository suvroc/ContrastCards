import { IconChooser } from './../icon-chooser/icon-chooser';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IconEngine } from './icon-engine';

@NgModule({
  declarations: [
    IconEngine,
    IconChooser
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    IconEngine
  ]
})
export class IconEngineModule {}
