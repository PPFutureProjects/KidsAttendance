import { Pipe, PipeTransform } from '@angular/core';
import {Kid} from "../../models/kid/kid.model";
import {Observable} from "rxjs/Observable";

/**
 * Generated class for the NotCheckedInPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'notCheckedIn',
})
export class NotCheckedInPipe implements PipeTransform {
  /**
   * returns the list of kids that are not checked in
   */
  transform(allKids: Observable<Kid[]>, checkedIn: string[], ...args) {
    // if ( ! checkedIn ) {
    //   //can't filter!
    //   return allKids;
    // }
    // console.log("Filtering kids:",allKids,checkedIn);
    // allKids.forEach( kid => console.log("Kid",kid, checkedIn.indexOf(kid.key)));
    // return allKids.filter( kid => checkedIn.indexOf(kid.key) == -1 );
  }
}
