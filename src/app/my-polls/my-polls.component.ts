import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ApiserviceService} from '../_services/apiservice.service';
import { first } from 'rxjs/operators';
import { Poll } from '../_models/poll';
import { state } from '@angular/animations';
@Component({
  selector: 'app-my-polls',
  templateUrl: './my-polls.component.html',
  styleUrls: ['./my-polls.component.css']
})
export class MyPollsComponent implements OnInit {
  items: Poll;
  constructor(private apiService: ApiserviceService,
      private router: Router) {
    

  //   this.shareData.items.subscribe((value) => {

  //     for (const key in value.polls) {
  //       if (value.polls.hasOwnProperty(key)) {
  //         const val = value.polls[key];
  //         console.log(typeof val);
  //         console.log(val);

  //         this.polls.push(val);
  //       }
  //     }
  //     console.log(this.polls);
  //   });
  }

  ngOnInit() {
    this.apiService.getAllPolls().pipe(first())
    .subscribe(result => console.log(this.items = result));
  }

  showResults(id) {
    this.router.navigate(['results'], {state: {data: {id}}}); }
    showVotes(id) {
      this.router.navigate(['vote'], {state: {data: {id}}}); }
}
