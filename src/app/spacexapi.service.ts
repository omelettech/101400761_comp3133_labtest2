import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from './models/mission.model'; // Import Mission model

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  // Fetch all SpaceX launches
  getLaunches(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.apiUrl);
  }

  // Fetch a single mission by flight number
  getMissionById(flightNumber: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.apiUrl}/${flightNumber}`);
  }
}
