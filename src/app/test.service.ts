import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

@Injectable()
export class TestService {

  constructor(private _http: Http) {}

  test() {
    console.log('Test Service testing...');

    this._http.get('http://test-api.javascript.ru/v1/plebedinsky/users').subscribe(
      (data: Response) => {
        //debugger;
      },
      (error: Response) => {
        //debugger;
      }
    )
  }
}
