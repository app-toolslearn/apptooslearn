import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { AppSettings } from "../service/app-settings";

@Injectable()
export class MsgService {
  private baseUrl: any;
  private phpUrl: any;

  constructor(private http: Http) {
    this.baseUrl = AppSettings.SERVICE_URL + "message/sendMsg";
    this.phpUrl = AppSettings.PHP_URL + "action_forget_password.php";
  }

  sendMsg(userid, desc) {
    console.log(userid);
    console.log(desc);

    return this.http
      .post(`${this.baseUrl}`, {
        user_id: userid,
        desc: desc
      })
      .map(this.extractResponse);
  }
  private extractResponse(res: Response) {
    return res.json();
  }

  forgetPassword(email) {
    return this.http
      .get(this.phpUrl + '?user_email=' + email)
      .map(this.extractResponse);
  }
}
