import { Component, OnInit } from '@angular/core';
import { StemService } from './stem.service';
import { Observable } from 'rxjs';
import { StemModule } from './stem.module';

@Component({
  selector: 'app-stem',
  templateUrl: './stem.component.html',
  styleUrls: ['./stem.component.scss']
})
export class StemComponent  {

  stemmen: StemModule[];
  constructor(private _stemService: StemService) {
  this._stemService.getStemmen().subscribe(
  result => {
  this.stemmen = result;
}
);
}
}