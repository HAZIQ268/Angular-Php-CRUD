import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyuserService {

  constructor(private http : HttpClient) { }

  private url = 'http://localhost:3000/CRE_app/index.php';

  abc(){
    return this.http.get(this.url);
  }

  xyz(update:any){
      return this.http.post(this.url,update);
  }

}
