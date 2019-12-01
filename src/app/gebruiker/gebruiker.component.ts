import { Component, OnInit } from '@angular/core';
import { GebruikerModule } from './gebruiker.module';
import { GebruikerService } from './gebruiker.service';

@Component({
  selector: 'app-gebruiker',
  templateUrl: './gebruiker.component.html',
  styleUrls: ['./gebruiker.component.scss']
})
export class GebruikerComponent {

  gebruikers: GebruikerModule[];
  constructor(private _gebruikerService: GebruikerService) {
  this._gebruikerService.getGebruikers().subscribe(
  result => {
  this.gebruikers = result;
}
);
}
}

 
