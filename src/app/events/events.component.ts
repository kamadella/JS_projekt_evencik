import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../types/Event';
import { EventsService } from '../services/eventy/events.service';


@Component({
  selector: '[app-events]',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  @Input() event: Event;
  @Input() id: number;

  constructor(private eventsService: EventsService) {
  }

  onClick(){
    console.log("kliknięto w zadanie: " + this.event.id);
  }

  onDelete(){
    this.eventsService.deleteEvent(this.event.id).subscribe();
  }

  ngOnInit(): void {
    console.log("wydarzenie id " + this.event.id)
  }

}

