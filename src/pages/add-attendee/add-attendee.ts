import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Kid} from "../../models/kid/kid.model";
import {KidAttendanceService} from "../../services/kid-attendance/kid-attendance.service";
import {ToastService} from "../../services/toast/toast.service";

/**
 * Generated class for the AddAttendeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-attendee',
  templateUrl: 'add-attendee.html',
})
export class AddAttendeePage {
  kid: Kid = {
    name: '',
    age: 8,
    birthday: new Date(2010,10,21),
    guardians: 'bob and sally'
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private attendance: KidAttendanceService,
    private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAttendeePage');
  }

  addKid(kid: Kid) {
    this.attendance.addKid(kid).then(ref => {
      console.log(ref.key);
      this.navCtrl.setRoot('HomePage', {key:ref.key});
      this.toast.show(`${kid.name} saved!`);
    })
  }

}
