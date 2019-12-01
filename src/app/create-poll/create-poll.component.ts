import { Component, OnInit, isDevMode } from '@angular/core';
import {Option} from '../shared/options';
import {Vakjes} from '../_models/vakjes';
import { ApiserviceService } from '../_services/apiservice.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Poll } from '../_models/poll';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent implements OnInit {
  title = 'cast-the-vote-frontend';
  name = '';
  topic = '';
  shareAbleLink = '';
  linkGenerated: Boolean = false;
  mode: 'creater'|'caster' = 'creater';
  options: Option = [];
  vakjes : Vakjes;
  editOptions: Boolean = false;
  poll: Poll;
  topicAdded: Boolean = false;
  choice: string;
  pollId : Poll;
  
  constructor(
    private apiservice: ApiserviceService,
  ) { 
    
  }
  

  ngOnInit() {
  }
  public test(){
    let poll = new Poll();
    poll.Topic = this.topic;
    poll.Count = 0;
    this.apiservice.addPoll(poll).subscribe(result => {
      this.pollId = result, this.createPoll(result);
      }
      );
     
      
  }
  public createPoll(pollID){
    for (let i = 0; i < this.options.length; i++) {
      let option = new Vakjes();
      option.pollID = pollID.pollID;
      option.choice = this.options[i].choice;
      option.votes = this.options[i].votes;
      console.log(option,"option test");
      this.apiservice.addOptions(option).subscribe(); 
    }
  }

  createOption(numberofOptions): void {
    console.log(numberofOptions);
    for (let i = 0; i < numberofOptions; ++i) {
      this.options.push({choice: this.choice, votes: 0});
    }
  }
}
