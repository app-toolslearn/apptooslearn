import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';


@Injectable() 
export class TestService {
    private baseUrl:any;

    constructor(private http : Http)
    {
        this.baseUrl = "http://192.168.1.13:3000/test/index" 
        
    }

    testService(lessonid,user_id){
        
  return this.http.post(`${this.baseUrl}`,{
    "user_id":user_id,
    "lesson_id": lessonid,
  }).map(this.extractResponse) 
    }
    private extractResponse(res : Response){
        return res.json();
    }

}
