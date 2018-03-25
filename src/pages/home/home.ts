import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {KidRosterService} from "../../services/kid-roster/kid-roster.service";
import {Kid} from "../../models/kid/kid.model";
import {Observable} from "rxjs/Observable";
import {Attendance} from "../../models/attendance/attendance.model";
import {KidAttendanceService} from "../../services/kid-attendance/kid-attendance.service";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rosterList$: Observable<Kid[]>;
  attendanceList$: Observable<Attendance[]>;


  checkInRoot = 'CheckInPage'
  checkOutRoot = 'CheckOutPage'
  overviewRoot = 'OverviewPage'

  constructor(
    public navCtrl: NavController,
    private rosterService: KidRosterService,
    private attendanceServce: KidAttendanceService
  ) {
      this.rosterList$ = this.rosterService
        .getKidRosterList() //DB List
        .snapshotChanges()      //Key and Value pairs
        .map( changes => {
          return changes.map( c => ({
            key: c.payload.key, ...c.payload.val()
          })
        )
      });

      this.attendanceList$ = this.attendanceServce
        .getKidAttendanceList() //DB List
        .snapshotChanges() //Key/Vals
        .map( changes => {
          return changes.map( c => ({
            key: c.payload.key, ...c.payload.val()
          })
        )
      });

  }

}
