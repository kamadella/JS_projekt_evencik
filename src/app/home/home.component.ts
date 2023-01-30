import { Component, OnInit } from '@angular/core';
import { Event } from '../../types/Event';
import { EventsService } from '../services/eventy/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eventy: Event[];
  selected: number = -1;
  events: Event[]=[];

  // EventsList = new Array(
  //   new Event("Rockowa Scena"),
  //   new Event("Strefa Kultury Studenckiej"),
  //   new Event("Pizza Party"),
  //   new Event("Czyszzcenie WC"),
  //   new Event("Impreza salto")
  // );

  constructor(private eventService: EventsService) {
    eventService.getEventsAsynch().subscribe(data=>this.events=data);
   }

  ngOnInit(): void {
  }

  addEvent() {
    const event = new Event(0, 'Stephen', new Date(0), new Date(0) );
    this.eventService.addEvent(event).subscribe(ret => this.events.push(event));
  }


}
