import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event } from 'src/types/Event';
import { EventsService } from 'src/app/services/eventy/events.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css','../../style.css']
})
export class EventCreateComponent implements OnInit {

  formModel:FormGroup;

  constructor(private router: Router, private eventService: EventsService) {
    eventService.getEventsAsynch().subscribe();
    this.formModel = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
    });

  }

  get name(){
    return this.formModel.get('name');
  }

  get startDate(){
    return this.formModel.get('startDate');
  }

  get endDate(){
    return this.formModel.get('endDate');
  }

  ngOnInit(): void {
  }

  addEvent() {
      const event = new Event(0, this.formModel.value.name, this.formModel.value.startDate, this.formModel.value.endDate);
      this.eventService.addEvent(event).subscribe();
      this.router.navigate(['/']);
  }

}
