import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private path = 'project';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    return this.http.get(`${environment.baseUrl}${this.path}`);
  }
}
