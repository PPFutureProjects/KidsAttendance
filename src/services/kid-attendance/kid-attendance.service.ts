import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {Kid} from "../../models/kid/kid.model";

@Injectable()

export class KidAttendanceService {

  private kidAttendanceListRef = this.db.list<Kid>('kid-attendance');

  constructor(private db: AngularFireDatabase) {

  }

  getKidAttendanceList() {
    return this.kidAttendanceListRef;
  }

  addKid(kid: Kid) {
    return this.kidAttendanceListRef.push(kid);
  }

  saveKid(kid: Kid) {
    return this.kidAttendanceListRef.update(kid.key, kid);
  }

  removeKid(kid: Kid) {
    return this.kidAttendanceListRef.remove(kid.key);
  }
}
