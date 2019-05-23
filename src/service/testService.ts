import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import {AppSettings} from "../service/app-settings";

@Injectable()
export class TestService {
  private baseUrlTest: any;
  private baseUrlExcercise: any;
  private baseUrlTestChoice: any;

  constructor(private http: Http) {
    this.baseUrlTest = AppSettings.SERVICE_URL+"test/getAllTest";
    this.baseUrlExcercise = AppSettings.SERVICE_URL+"test/exerciseByLessonId";
    this.baseUrlTestChoice = AppSettings.SERVICE_URL+"test/testChoiceByTestId";
  }

  getAllTest() {
    return this.http
      .post(`${this.baseUrlTest}`, {})
      .map(this.extractResponse);
  }

  exerciseByLessonId(lessonID) {
    //console.log
    return this.http
      .post(`${this.baseUrlExcercise}`, {lessonID: lessonID})
      .map(this.extractResponse);
  }

  testChoiceByTestId(testId) {
    //console.log
    return this.http
      .post(`${this.baseUrlTestChoice}`, {testId: testId})
      .map(this.extractResponse);
  }
  private extractResponse(res: Response) {
    return res.json();
  }
}
