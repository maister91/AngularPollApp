import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiserviceService } from '../../_services/apiservice.service';
import {UserService} from '../../_services/user.service';
import { Poll } from '../../_models/poll';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Option } from '../../_models/option';	
import {Vakjes} from '../../_models/vakjes';
import { Chart } from 'chart.js';

@Component({
	selector: 'app-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.css']
})

export class ResultsComponent implements  OnInit {
	chart: Chart;
	cardTitle: 'Doughnut Chart' | 'Bar Chart' = 'Doughnut Chart';
	canvas: any = {};
	ctx: any;
	toggleDoughnut: Boolean = true;
	toggleBar: Boolean = false;
	sharedLink: String = '';
	btnTitle: 'Doughnut Chart' | 'Bar Chart' = 'Bar Chart';
	private pollId = '';
	id : 0;
	vote: Boolean[] = [];
	member : Poll[];
	// private router: Router
	polls : Poll ;
	options: Option;
	poll: {
		topic: string,
		count: number,
		options: string,
		votes: number[]
	} = { count: 0, topic: '', options: '', votes: [] };
	alreadyVoted: Boolean = false;
	constructor(private activatedRoute: ActivatedRoute, private userService: ApiserviceService) { }

	ngOnInit() {
			this.loadAllUsers();
	}
	
	private loadAllUsers() {
		this.id = history.state.data.id;
        this.userService.getPollonID(this.id).subscribe(users =>console.log( this.polls = users));
	}

}

