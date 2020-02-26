import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {
  private apiDomain = 'http://localhost:8000';
  private daywiseUrl = '/daywise_activity';

  constructor(
    private http: HttpClient
    ) { }

  getDaywise(){
    return this.http.get<any>(this.apiDomain + this.daywiseUrl);
    
  }
}
