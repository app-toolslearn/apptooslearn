import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';


@Injectable() 
export class Longin {
    private baseUrl:any;

    constructor(private http : Http)
    {
        this.baseUrl = "http://192.168.1.13:3000/longin/checklogin" 
        
    }

    loginService(username,password){
        console.log(username);
        console.log(password);
        
  return this.http.post(`${this.baseUrl}`,{
    "username":username,
    "password":password
  }).map(this.extractResponse) 
    }
    private extractResponse(res : Response){
        return res.json();
    }

}
