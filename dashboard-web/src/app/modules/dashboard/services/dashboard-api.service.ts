import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {
  private apiDomain = 'http://localhost:8000';
  private daywiseUrl = '/daywise_activity';

  constructor(
    private http: HttpClient
    ) { }

  getDaywise(event_name){
    console.log(event_name);
    let params = new HttpParams();
    params = params.append('event_name', event_name.toString());

    return this.http.get<any>(this.apiDomain  + this.daywiseUrl, {params: params});
    
  }
}
