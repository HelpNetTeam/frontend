import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  private path = 'organization';
  constructor(private http: HttpClient) {}

  getOrganizations(): Observable<any> {
    return this.http.get(`${environment.baseUrl}${this.path}`);
  }
}
