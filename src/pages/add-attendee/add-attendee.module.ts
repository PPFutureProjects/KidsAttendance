import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAttendeePage } from './add-attendee';

@NgModule({
  declarations: [
    AddAttendeePage,
  ],
  imports: [
    IonicPageModule.forChild(AddAttendeePage),
  ],
})
export class AddAttendeePageModule {}
