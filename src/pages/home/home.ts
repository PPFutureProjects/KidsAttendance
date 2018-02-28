import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {KidAttendanceService} from "../../services/kid-attendance/kid-attendance.service";
import {Kid} from "../../models/kid/kid.model";
import {Observable} from "rxjs/Observable";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  attendanceList$: Observable<Kid[]>;

  constructor(
    public navCtrl: NavController,
    private attendance: KidAttendanceService
  ) {
    this.attendanceList$ = this.attendance
      .getKidAttendanceList() //DB List
      .snapshotChanges()      //Key and Value pairs
      .map( changes => {
        return changes.map( c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      })

  }

}
