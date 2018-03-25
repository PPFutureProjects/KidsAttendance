import {Injectable} from "@angular/core";
import {AngularFireDatabase, SnapshotAction} from "angularfire2/database";
import {Kid} from "../../models/kid/kid.model";
import {Attendance} from "../../models/attendance/attendance.model";
import {DateTime} from "ionic-angular";
import {KidRosterService} from "../kid-roster/kid-roster.service";
import {KidAttendanceService} from "../kid-attendance/kid-attendance.service";
import {zip} from "rxjs/observable/zip";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {combineLatest} from "rxjs/observable/combineLatest";

  @Injectable()

  export class KidCombinedService {


    inKids$: BehaviorSubject<Kid[]> = new BehaviorSubject([]);
    outKids$: BehaviorSubject<Kid[]> = new BehaviorSubject([]);

    constructor(    private rosterService: KidRosterService,
                    private attendanceService: KidAttendanceService) {

      combineLatest(
        this.attendanceService.getKidAttendanceList().snapshotChanges(),
        this.rosterService.getKidRosterList().snapshotChanges(),
        ( attdUpdate , rosterUpdate ) => {
          const attendanceList = attdUpdate.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }));
          const rosterList = rosterUpdate.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }));
          return [ attendanceList , rosterList ];
        }
      ).subscribe(
        ( [attendanceList , rosterList ]) => {

          const checked_in: string[] = attendanceList.map(attd => attd.kid_key);
          // console.log('Checked in keys', checked_in);

          //now filter!
          const outKids = rosterList.filter(kid => checked_in.indexOf(kid.key) == -1); //the ones not checked in are out.
          const inKids = rosterList.filter(kid => {
            // console.log("Checking kid for IN.", "Kid", kid, "kid.kid_key", kid.key, "Found at index", checked_in.indexOf(kid.key));
            return checked_in.indexOf(kid.key) != -1;
          }); //the ones checked in are in.

          inKids.map( kid => {
            const attd_rec = attendanceList.find( attd => attd.kid_key == kid.key);
            kid.attd = attd_rec; //paste the attendance rec on each checked-in kid.
            return kid;
          })

          console.log('In', inKids, 'Out', outKids);

          //and populate the subjects!
          this.inKids$.next(inKids);
          this.outKids$.next(outKids);

        });
    }

  getInKids() {
    return this.inKids$;
  }

  getOutKids() {
    return this.outKids$;
  }

}
