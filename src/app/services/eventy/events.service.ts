import { IEvent } from './../../../types/Interfaces/IEvent';
import { Event } from '../../../types/Event';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventMap } from 'src/types/Maps/EventMap';

@Injectable({
  providedIn: 'root'
})

export class EventsService  {
  events:Event[]=[];
  private url = 'http://localhost:3000/events';


  constructor(private http: HttpClient) {
  }

  getEventsSynch():Event[]{
    return this.events;
  }

  getEventsAsynch():Observable<Event[]>{
    //return of(this.zadania);
    return this.http.get<Event[]>(this.url)
    .pipe(
      catchError(this.handleError<Event[]>('getEvent', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' failed' + error);
      return of(result as T);
    };
  }

  addEvent(event: Event): Observable<IEvent> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<EventMap>(this.url, new EventMap(event), httpOptions)
      .pipe(
        catchError(this.handleError<Event>('addEvent'))
      );

  }

  deleteEvent(id:number):Observable<Event>{
    const newUrl = `${this.url}/${id}`;
    return this.http.delete<Event>(newUrl);
  }

}
