import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';


@Injectable() 
export class TestService {
    private baseUrl:any;

    constructor(private http : Http)
    {
        this.baseUrl = "http://172.20.10.2:3000/test/testByLessonId" 
        
    }

    testService(lessonid){
        
  return this.http.post(`${this.baseUrl}`,{
    "lessonID":lessonid,
  }).map(this.extractResponse) 
    }
    private extractResponse(res : Response){
        return res.json();
    }

}
