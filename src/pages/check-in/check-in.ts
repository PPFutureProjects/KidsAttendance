import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {KidRosterService} from "../../services/kid-roster/kid-roster.service";
import {Kid} from "../../models/kid/kid.model";
import {Observable} from "rxjs/Observable";
import {Attendance} from "../../models/attendance/attendance.model";
import {KidAttendanceService} from "../../services/kid-attendance/kid-attendance.service";
import {KidCombinedService} from "../../services/kid-combined/kid-combined.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

/**
 * Generated class for the CheckInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-in',
  templateUrl: 'check-in.html',
})
export class CheckInPage {

  rosterList$: Observable<Kid[]>;
  attendanceList$: Observable<Attendance[]>;
  outKids$: BehaviorSubject<Kid[]>;

  constructor(
    public navCtrl: NavController,
    private rosterService: KidRosterService,
    private attendanceService: KidAttendanceService,
    private combinedService: KidCombinedService
  ) {

    this.outKids$ = this.combinedService.getOutKids();

    this.combinedService.getOutKids().subscribe(
      (x) => { console.log("Subscribed to outKids:",x); } );

  }

  checkIn(kid: Kid) {
    this.attendanceService.checkIn(kid);
  }

}
