import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ZadanieComponent } from './zadanie/zadanie.component';
import { EventComponent } from './event/event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { WolontariuszeComponent } from './wolontariusze/wolontariusze.component';
import { OsobaComponent } from './osoba/osoba.component';
import { WolontariuszEditComponent } from './forms/wolontariusz/wolontariusz-edit/wolontariusz-edit.component';
import { WolontariuszCreateComponent } from './forms/wolontariusz/wolontariusz-create/wolontariusz-create.component';
import { EventCreateComponent } from './forms/event/event-create/event-create.component';
import { EventEditComponent } from './forms/event/event-edit/event-edit.component';
import { ZadanieEditComponent } from './forms/zadanie/zadanie-edit/zadanie-edit.component';
import { ZadanieCreateComponent } from './forms/zadanie/zadanie-create/zadanie-create.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { PlDatePipe } from './pl-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ZadanieComponent,
    EventComponent,
    NavbarComponent,
    WolontariuszeComponent,
    OsobaComponent,
    WolontariuszEditComponent,
    WolontariuszCreateComponent,
    EventCreateComponent,
    EventEditComponent,
    ZadanieEditComponent,
    ZadanieCreateComponent,
    OsobaComponent,
    HomeComponent,
    EventsComponent,
    MyDirectiveDirective,
    PlDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    FormsModule,
    ScrollingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'event/list/:id', component: EventComponent },
      { path: 'event/create', component: EventCreateComponent },
      { path: 'event/edit', component: EventEditComponent },
      { path: 'wolo/create', component: WolontariuszCreateComponent },
      { path: 'wolo/edit', component: WolontariuszEditComponent },
      { path: 'zadanie/create/:id', component: ZadanieCreateComponent },
      { path: 'zadanie/edit/:id', component: ZadanieEditComponent },
      { path: 'wolo', component: WolontariuszeComponent },
      { path: 'zadanie', component: EventComponent },
    ])
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pl' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
