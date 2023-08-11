// import { Injectable } from '@angular/core';
// import {HttpClient} from "@angular/common/http";
// import { Observable } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   constructor(private http:HttpClient) { }

//   getDatas(){
//     return this.http.get('http://localhost:8080/datas');
//   }
  
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getDatas() {
    return this.http.get('http://localhost:8080/datas');
  }

  // addNewData(newData: any) {
  //   return this.http.post('http://localhost:8080/addData', newData);
  // }
  submitFormData(formData: any): Observable<any> {

    const apiUrl = 'http://localhost:8080/addData'; // Replace with your API URL

    return this.http.post(apiUrl, formData);

  }
}

