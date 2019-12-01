import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollComponent } from './poll/poll.component';
import { GebruikerComponent } from './gebruiker/gebruiker.component';
import { AntwoordComponent } from './antwoord/antwoord.component';
import { CastVoteComponent } from './cast-vote/cast-vote.component';
import { StemComponent } from './stem/stem.component';
import {MyPollsComponent} from './my-polls/my-polls.component';
import {ResultsComponent} from './my-polls/results/results.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
import { CreatePollComponent } from './create-poll/create-poll.component';

@NgModule({
  declarations: [
    AppComponent,
    PollComponent,
    GebruikerComponent,
    AntwoordComponent,
    StemComponent,
    AlertComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    CreatePollComponent,
    CastVoteComponent,
    MyPollsComponent,
    ResultsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    appRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ { 
    provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  // provider used to create fake backend
  fakeBackendProvider],
  bootstrap: [AppComponent]
  
})

export class AppModule {
 }
