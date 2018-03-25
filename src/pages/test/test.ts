import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TestPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  checkInRoot = 'CheckInPage'
  checkOutRoot = 'CheckOutPage'
  overviewRoot = 'OverviewPage'


  constructor(public navCtrl: NavController) {}

}
