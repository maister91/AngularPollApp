import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GebruikerModule } from './gebruiker.module';


@Injectable({
  providedIn: 'root'
  
})
export class GebruikerService {
  constructor(private http: HttpClient) { }
  getGebruikers(): Observable<GebruikerModule[]> {
    return this.http.get<GebruikerModule[]>("https://localhost:44361/api/Gebruikers");
}
}