import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AntwoordModule } from './antwoord.module';



@Injectable({
  providedIn: 'root',
  
})
export class AntwoordService {

  constructor(private http: HttpClient) { }
  getAntwoorden(): Observable<AntwoordModule[]> {
    return this.http.get<AntwoordModule[]>("https://localhost:5001/api/antwoord");
}
}