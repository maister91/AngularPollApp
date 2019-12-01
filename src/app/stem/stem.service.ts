import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {StemModule} from  './stem.module'


@Injectable({
  providedIn: 'root'
})
export class StemService {

  constructor(private http: HttpClient) { }
  getStemmen(): Observable<StemModule[]> {
    return this.http.get<StemModule[]>("https://localhost:5001/api/stem");
}
}