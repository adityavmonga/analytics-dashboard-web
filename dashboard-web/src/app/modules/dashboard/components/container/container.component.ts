import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
	selected: string;
	activeEvent = {title:'Class Section', value: 'activity_classic_class_section_start'};
	isEventSelected: boolean = false;
	state: any;
	eventlist = {
		"Event Based": [
			{title: 'Class Section', value: 'activity_classic_class_section_start'},
			{title: 'Polling Session', value: 'activity_classic_polling_session_start'},
			{title: 'Self Paced', value: 'activity_classic_spp_start'},
			{title: 'Demographics', value: 'activity_classic_demographics_start'},
			{title: 'Course Create', value: 'activity_classic_course_create'},
			{title: 'Roll Call', value: 'activity_classic_roll_call_start'}
		  ],
		"Overall": [
			{title:"Total Demographics", value: "tdemo"},
			{title: "Total OS Usage", value: "tosusage"}
		]
	};
	events : [];

	products = [
		{title: 'Classic', val:"classic"},
		{title: 'Instructor Web', val: "webi"},
		{title: 'Student Web', val: "webs"},
		{title: 'Insights', val: "insights"},
	]
	categories = [
		{title: 'Event Based'},
		{title: 'Overall'}
	]
	activeCategory = this.categories[0]['title']
	constructor(public activatedRoute: ActivatedRoute) {}
	
	productChange(event) {
		this.selected = event.value;
		console.log(this.selected);
	}

	changeCategory(event) {
		this.activeCategory = event.target.innerText;
		this.events = this.eventlist[this.activeCategory];
		// event.isActive = !event.isActive;
	}
	eventlistChange(event){
		this.activeEvent.value = event.value;
		// this.activeEvent.value = this.eventlist[this.activeCategory][this.activeEvent.title];
		this.isEventSelected = true;
	}

	ngOnInit() {
		// this.state$ = this.activatedRoute.paramMap
		// .pipe(map(() => window.history.state));
		this.state = history.state;
		this.selected = this.state.selected;
		// console.log(this.state);
	}

}
