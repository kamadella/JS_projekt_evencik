import { IZadanie } from "../Interfaces/IZadanie";

export class ZadanieMap implements IZadanie {
  id?:number;
  nazwa: string;
  czasPoczatek: Date;
  czasKoniec: Date;
  wolontariuszeWymagani: number;
  eventId: number;
  przydzieleniId: number[];

  constructor(zadanie:IZadanie){
    this.id=zadanie.id
    this.nazwa=zadanie.nazwa,
    this.czasPoczatek = zadanie.czasPoczatek,
    this.czasKoniec = zadanie.czasKoniec,
    this.wolontariuszeWymagani = zadanie.wolontariuszeWymagani,
    this.eventId = zadanie.eventId;
    this.przydzieleniId =  zadanie.przydzieleniId;
    //zadanie.przydzieleniId.forEach(x=>this.przydzieleniId.push(x));

    console.log(zadanie.przydzieleniId);
  }
}
