import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import {AppSettings} from "../service/app-settings";

@Injectable()
export class Longin {
  private baseUrl: any;

  constructor(private http: Http) {
    this.baseUrl = AppSettings.SERVICE_URL+"longin/checklogin";
  }

  loginService(username, password) {
    console.log(username);
    console.log(password);

    // เรียก nodeJs service (API url : AppSettings.SERVICE_URL+"longin/checklogin")
    // .map ใช้สำหรับแปลงค่าที่ได้ให้เป็น json ที่ function extractResponse()
    return this.http
      .post(`${this.baseUrl}`, {
        username: username,
        password: password
      })
      .map(this.extractResponse);
  }
  private extractResponse(res: Response) {

    // แปลง ผลลัพเป็น json
    return res.json();
  }
}
