import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';


@Injectable() 
export class LessonService {
    private baseUrl:any;

    constructor(private http : Http)
    {
        this.baseUrl = "http://192.168.1.13:3000/lesson/lessonByCourseID" 
        
    }

    lessonService(courseID){
        
  return this.http.post(`${this.baseUrl}`,{
    "course_id":courseID
  }).map(this.extractResponse) 
    }
    private extractResponse(res : Response){
        return res.json();
    }

}
