import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {Kid} from "../../models/kid/kid.model";
import {Attendance} from "../../models/attendance/attendance.model";
import {DateTime} from "ionic-angular";

@Injectable()

export class KidAttendanceService {

  private kidAttendanceDB = this.db.list<Attendance>('kid-attendance');

    constructor(private db: AngularFireDatabase) {

  }

  getKidAttendanceList() {
    return this.kidAttendanceDB;
  }

  checkIn(kid: Kid) {

    const checkin: Attendance = {
      kid_key: kid.key,
      attended: new Date(),
      check_in: Date.now(),
      check_out: null
    };
    return this.kidAttendanceDB.push(checkin);
  }

  checkOut(attd: Attendance) {
    attd.check_out = Date.now();
    return this.kidAttendanceDB.update(attd.key, attd);
  }

}
