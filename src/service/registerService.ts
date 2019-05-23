import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { AppSettings } from "../service/app-settings";

@Injectable()
export class RegisterService {
  private baseUrl: any;

  constructor(private http: Http) {
    this.baseUrl = AppSettings.SERVICE_URL + "register/checkRegister";
  }

  registerService(username,useremail, password) {
    console.log(username);
    console.log(useremail);
    console.log(password);

    return this.http
      .post(`${this.baseUrl}`, {
        user_name: username,
        user_email: useremail,
        user_password: password
      })
      .map(this.extractResponse);
  }
  private extractResponse(res: Response) {
    return res.json();
  }
}
