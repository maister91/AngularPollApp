import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PollModule } from './poll.module';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }
  getPolls(): Observable<PollModule[]> {
    return this.http.get<PollModule[]>("https://localhost:5001/api/poll");
}
}