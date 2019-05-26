import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Storage } from "@ionic/storage";

import { AppSettings } from "../service/app-settings";

@Injectable()
export class TestService {
  private baseUrlTest: any;
  private baseUrlExcercise: any;
  private baseUrlTestChoice: any;
  private baseUrlSaveLog: any;

  constructor(private http: Http,
    private storage: Storage) {
    this.baseUrlTest = AppSettings.SERVICE_URL + "test/getAllTest";
    this.baseUrlExcercise = AppSettings.SERVICE_URL + "test/exerciseByLessonId";
    this.baseUrlTestChoice = AppSettings.SERVICE_URL + "test/testChoiceByTestId";
    this.baseUrlSaveLog = AppSettings.SERVICE_URL + "studyLog/saveStudyLog";
  }

  getAllTest() {
    return this.http
      .post(`${this.baseUrlTest}`, {})
      .map(this.extractResponse);
  }

  exerciseByLessonId(lessonID) {
    //console.log
    return this.http
      .post(`${this.baseUrlExcercise}`, { lessonID: lessonID })
      .map(this.extractResponse);
  }

  testChoiceByTestId(testId) {
    //console.log
    return this.http
      .post(`${this.baseUrlTestChoice}`, { testId: testId })
      .map(this.extractResponse);
  }
  private extractResponse(res: Response) {
    return res.json();
  }

  saveLog(usrt_id,les_id, point) {

    return this.http
      .post(`${this.baseUrlSaveLog}`, { user_id: usrt_id, les_id, point });
  }
}
