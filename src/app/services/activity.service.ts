import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private path = 'activity';

  constructor(private http: HttpClient) {}
  
  getActivities(): Observable<any> {
    return this.http.get(`${environment.baseUrl}${this.path}`);
  }
}
