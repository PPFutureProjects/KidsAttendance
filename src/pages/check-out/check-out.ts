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
 * Generated class for the CheckOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-out',
  templateUrl: 'check-out.html',
})
export class CheckOutPage {

  rosterList$: Observable<Kid[]>;
  attendanceList$: Observable<Attendance[]>;
  inKids$: BehaviorSubject<Kid[]>;

  constructor(
    public navCtrl: NavController,
    private rosterService: KidRosterService,
    private attendanceService: KidAttendanceService,
    private combinedService: KidCombinedService
  ) {

    this.inKids$ = this.combinedService.getInKids();

    this.combinedService.getInKids().subscribe(
      (x) => { console.log("Subscribed to inKids:",x); } );

  }

  checkOut(kid: Kid) {
    console.log('Checking out',kid);
    this.attendanceService.checkOut(kid['attd']); //attd gets pasted onto incoming kid records.
    // console.log('NOT IMPLEMENTED!');
  }

}
