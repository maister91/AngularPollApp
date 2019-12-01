import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Gebruiker } from '../_models';
import { Poll } from '../shared/options';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Gebruiker>;
    public currentUser: Observable<Gebruiker>;
    public currentPoll: Observable<Poll>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Gebruiker>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Gebruiker {
        return this.currentUserSubject.value;
    }
    
    login(gebruikersnaam, wachtwoord) {
        console.log(gebruikersnaam,wachtwoord);
        return this.http.post<Gebruiker>(`https://localhost:44361/api/gebruikers/authenticate`, { gebruikersnaam, wachtwoord })
            .pipe(map(gebruiker => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(gebruiker));
                this.currentUserSubject.next(gebruiker);
                return gebruiker;
            }));
    }
    register(gebruiker){
        return this.http.post<Gebruiker>(`https://localhost:44361/api/gebruikers/PostGebruiker`, {gebruiker })
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}