import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {Kid} from "../../models/kid/kid.model";

@Injectable()

export class KidRosterService {

  private kidRosterListRef = this.db.list<Kid>('kid-roster');

  constructor(private db: AngularFireDatabase) {

  }

  getKidRosterList() {
    return this.kidRosterListRef;
  }

  addKid(kid: Kid) {
    return this.kidRosterListRef.push(kid);
  }

  saveKid(kid: Kid) {
    return this.kidRosterListRef.update(kid.key, kid);
  }

  removeKid(kid: Kid) {
    return this.kidRosterListRef.remove(kid.key);
  }
}
