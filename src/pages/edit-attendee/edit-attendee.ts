import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Kid} from "../../models/kid/kid.model";
import {KidAttendanceService} from "../../services/kid-attendance/kid-attendance.service";
import {ToastService} from "../../services/toast/toast.service";

/**
 * Generated class for the EditAttendeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-attendee',
  templateUrl: 'edit-attendee.html',
})
export class EditAttendeePage {

  kid: Kid;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private attendance: KidAttendanceService,
              private toast: ToastService) {
  }

  ionViewWillLoad() {
    console.log(this.navParams.get('kid'));
    this.kid = this.navParams.get('kid');
  }

  saveKid(kid: Kid) {
    this.attendance.saveKid(kid).then( () => {
      this.navCtrl.setRoot('HomePage');
      this.toast.show(`${kid.name} saved!`);
    });
  }


  removeKid(kid: Kid) {
    return this.attendance.removeKid(kid).then( () =>
    {
      this.navCtrl.setRoot('HomePage');
      this.toast.show( `Annihilated ${kid.name}!`)
    })
  }
}
