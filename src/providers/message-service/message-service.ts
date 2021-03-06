import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MessageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageServiceProvider {
  private  url:string='http://localhost:3000/'
  constructor(public http: HttpClient) {

    console.log('Hello MessageServiceProvider Provider');
  }


  getMessages(){
    this.http.get(this.url);
  }

}
