import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {
  private apiDomain = 'http://localhost:8000';
  private activityUrl = '/daywise_activity';
  private usersUrl = '/user_data';
  constructor(
    private http: HttpClient
    ) { }

    getActivity(event_name){
      console.log(event_name);
      let params = new HttpParams();
      params = params.append('event_name', event_name.toString());
  
      return this.http.get<any>(this.apiDomain  + this.activityUrl, {params: params});
      
    }
    getUsers(event_name){
      console.log(event_name);
      let params = new HttpParams();
      params = params.append('event_name', event_name.toString());
  
      return this.http.get<any>(this.apiDomain  + this.usersUrl, {params: params});
      
    }
  
  }
