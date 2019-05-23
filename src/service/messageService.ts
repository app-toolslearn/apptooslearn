import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { AppSettings } from "../service/app-settings";

@Injectable()
export class MsgService {
  private baseUrl: any;

  constructor(private http: Http) {
    this.baseUrl = AppSettings.SERVICE_URL + "message/sendMsg";
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
}
