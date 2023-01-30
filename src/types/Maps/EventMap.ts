import { IEvent } from "../Interfaces/IEvent";

export class EventMap implements IEvent {
  nazwa: string;
  czasPoczatek: Date;
  czasKoniec: Date;

  constructor(zadanie: IEvent){
    this.nazwa = zadanie.nazwa,
    this.czasPoczatek = zadanie.czasPoczatek,
    this.czasKoniec = zadanie.czasKoniec
  }
}
