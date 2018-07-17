import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from "@angular/common/http";


@Injectable()
export class GotHttpService {
  private baseUrl = 'https://api.coinmarketcap.com/v2/ticker/?start=11&limit=100&sort=id';
  constructor(private _http: HttpClient) {
      }
      
     
          getDetails(): any {
                let myResponse = this._http.get(this.baseUrl);
                return myResponse;

          }
          public getSingleInformation(id):any
          {
            let myResponse=this._http.get(this.baseUrl+'/'+'id')
            return myResponse
          
      }

          
}