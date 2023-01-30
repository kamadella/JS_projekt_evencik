import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/eventy/events.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css','../../style.css']
})
export class EventEditComponent implements OnInit {

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

}
