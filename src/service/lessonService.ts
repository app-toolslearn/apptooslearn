import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import {AppSettings} from "../service/app-settings";

@Injectable()
export class LessonService {
  private baseUrl: any;
  private baseUrlLessonContent: any;
  constructor(private http: Http) {
    this.baseUrl = AppSettings.SERVICE_URL+"lesson/lessonByCourseID";
    this.baseUrlLessonContent = AppSettings.SERVICE_URL+"lesson/lessonContentByLesId";
  }
  lessonService(courseID,userId) {
    return this.http
      .post(`${this.baseUrl}`, {
        course_id: courseID,
        user_id : userId
      })
      .map(this.extractResponse);
  }

  getLessonContent(lessonId) {
    return this.http
      .post(`${this.baseUrlLessonContent}`, {
        lesson_id: lessonId
      })
      .map(this.extractResponse);
  }

  private extractResponse(res: Response) {
    return res.json();
  }
}
