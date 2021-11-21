import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { insurance } from './insurance';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  url: string = "http://localhost:3000/users"
  url2:string="http://localhost:3000/insurance"

  getUsers()
  {
    return this.http.get<User[]>(this.url);
  }

  insertUser(userobj:User):Observable<any>
  {
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(userobj);
    console.log(body);
      return this.http.post(this.url,body,{'headers':headers});
  }
  deleteRecord(id:number):Observable<any>
  {
    let deleteURL =this.url +"/"+id;
    console.log("URL for delete :" +deleteURL);
    return this.http.delete(deleteURL);
  }


  ///insurance 
  getInsurance()
  {
    return this.http.get<insurance[]>(this.url2)
  }
  insertInsurance(insuraceobj:insurance):Observable<any>
  {
    const headersa={'content-type':'application/json'};
    const bodyy =JSON.stringify(insuraceobj);
    console.log(bodyy);
      return this.http.post(this.url2,bodyy,{'headers':headersa});
  }
  deleteInsurance(policyNo:number):Observable<any>
  {
    let deleteURLs=this.url2 +"/"+policyNo;
    console.log("URL for delete "+deleteURLs);
    return this.http.delete(deleteURLs);
  }
  
}
