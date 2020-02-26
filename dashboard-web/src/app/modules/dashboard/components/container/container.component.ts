import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
	selector: 'app-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
	@Input() selected: string;
	activeEventType: string;
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
	// selected = 'classic';
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
	cards = [
		{title: '1'},
		{title: '2'}
	]
	constructor() {}
	
	productChange(event) {
		this.selected = event.value;
		console.log(this.selected);
	}

	changeCategory(event) {
		this.activeCategory = event.target.innerText;
		this.events = this.eventlist[this.activeCategory];
	}
	eventlistChange(event){
		this.activeEventType = event.value;
	}

	ngOnInit() {
	}

}
