import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export const BASE_URL = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getPatients(): Observable<any> {
    return this.http.get<any>(BASE_URL + '/patients');
  }

  sendUserLocation(patient: any): Observable<any> {
    return this.http.post<any>(BASE_URL + '/patients', patient);
  }
}
