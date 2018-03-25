import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckInPage } from './check-in';
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    CheckInPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckInPage),
    PipesModule
  ],
})
export class CheckInPageModule {}
