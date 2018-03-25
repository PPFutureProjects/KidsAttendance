import {DateTime} from "ionic-angular";

export interface Attendance {
  key?: string;
  kid_key: string;
  attended: Date;
  check_in: number;
  check_out: number;
}
