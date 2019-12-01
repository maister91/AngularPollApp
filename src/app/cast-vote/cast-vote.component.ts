
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiserviceService } from '../_services/apiservice.service';
import {UserService} from '../_services/user.service';
import { Poll } from '../_models/poll';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Option } from '../_models/option';
import {Vakjes} from '../_models/vakjes';
import {Router} from '@angular/router';


@Component({
	selector: 'app-cast-vote',
	templateUrl: './cast-vote.component.html',
	styleUrls: ['./cast-vote.component.css']
})
export class CastVoteComponent implements OnInit {
	private pollId = '';
	id : 0;
	vote: Boolean[] = [];
	member : Poll[];
	// private router: Router
	polls = [];
	private router: Router
	options: Option;

	poll = { count: 0, topic: '', options: [] };
	alreadyVoted: Boolean = false;
	constructor(private activatedRoute: ActivatedRoute, private fireBaseReq: ApiserviceService,private userService: UserService) { }

	ngOnInit() {
		
		// this.activatedRoute.params.subscribe((value: Params) => {
			// this.pollId = value['id'];
			// if (!window.localStorage.getItem(this.pollId) || window.localStorage.getItem(this.pollId) === 'false') {
			// 	console.log('not casted yet');
			// 	console.log(this.pollId);
				this.loadAllUsers()
				
			// 	window.localStorage.setItem(this.pollId, 'false');
			// } else if (window.localStorage.getItem(this.pollId) === 'true') {
			// 	this.alreadyVoted = true;
			// }
		// });

	}
	private loadAllUsers() {
		this.id = history.state.data.id;
        this.userService.getPollonID(this.id)
            .pipe(first())
			.subscribe(users => this.polls = users);		
    }
	public giveValue(pollValue){
			this.poll = pollValue;
			console.log(pollValue)
			for (let i = 0; i < pollValue; i++) {
				let option = new Vakjes();
				option.pollID = pollValue.pollID;
				option.choice = this.options[i].choice;
				option.votes = this.options[i].votes;
				console.log(option,"option test");
			  }
		
	}

	public castVote(index, pollsoptions) {
		this.options = pollsoptions;
		console.log(this.options)
		this.vote = this.vote.map(() => {return false });
		this.vote[index] = true;
		console.log(this.vote, "id?")
	}

	public updateVote(id) {
		this.options.votes = this.options.votes +1;
		console.log(this.options,"stemmen")
		let option = new Option()
		option = this.options;
		this.userService.updateMember(5,this.options)
			.subscribe(result => console.log(result));
			console.log(id, "id");
			// this.router.navigate(['/routepath']);
			this.alreadyVoted = true;
	}
}
