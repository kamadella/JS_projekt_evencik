import { IWolontariusz } from './../Interfaces/IWolontariusz';


export class WolontariuszMap implements IWolontariusz {

  imie: string;
  nazwisko: string;
  telefon: number;
  wiek: number;

  constructor(wolo: IWolontariusz){
    this.imie = wolo.imie,
    this.nazwisko = wolo.nazwisko,
    this.telefon = wolo.telefon,
    this.wiek = wolo.wiek
  }
}
