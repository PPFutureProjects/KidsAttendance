import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditAttendeePage } from './edit-attendee';

@NgModule({
  declarations: [
    EditAttendeePage,
  ],
  imports: [
    IonicPageModule.forChild(EditAttendeePage),
  ],
})
export class EditAttendeePageModule {}
