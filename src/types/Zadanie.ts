import { IZadanie } from './Interfaces/IZadanie';
import { Wolontariusz } from "./Wolontariusz";

export class Zadanie implements IZadanie {
  private _id: number;
  private _nazwa: string;
  private _czasPoczatek: Date = new Date();
  private _czasKoniec: Date = new Date();
  //private _wolontariusze: Wolontariusz[];
  private _wolontariuszeObecni: number;
  private _wolontariuszeWymagani: number;

  private _eventId: number;
  private _przydzieleniId: number[];

  constructor(id:number, nazwa:string="", wymagani:number=-1, obecni:number=-1, poczatek:Date=new Date(0), koniec = new Date(0), eventId:number = -1){
      this._id = id;
      this._nazwa = nazwa;

      this._czasPoczatek = new Date(poczatek);
      this._czasKoniec = new Date(koniec);

      this._wolontariuszeWymagani = wymagani;
      this._wolontariuszeObecni = obecni;

      this._eventId = eventId;
      this._przydzieleniId = [];
  }

  public get id() : number {
    return this._id;
  }
  public set id(id:number){
      this._id = id;
  }

  public get nazwa() : string {
      return this._nazwa;
  }
  public set nazwa(nazwa:string){
      this._nazwa = nazwa;
  }

  public set wolontariuszeObecni(obecni:number){
    this._wolontariuszeObecni = obecni;
  }
  public get wolontariuszeObecni() : number {
    return this._wolontariuszeObecni;
  }

  public set wolontariuszeWymagani(wymagani:number){
    this._wolontariuszeWymagani = wymagani;
  }
  public get wolontariuszeWymagani() : number {
    return this._wolontariuszeWymagani;
  }

  public set czasPoczatek(czas:Date){
      this._czasPoczatek = czas;
  }
  public get czasPoczatek() : Date {
    return this._czasPoczatek;
  }

  public set czasKoniec(czas:Date){
    this._czasKoniec = czas;
  }
  public get czasKoniec() : Date {
    return this._czasKoniec;
  }

  public get eventId(): number{
    return this._eventId;
  }

  public get przydzieleniId(): number[]{
    return this._przydzieleniId;
  }
  public get przydzieleniIlosc(): number{
    return this._przydzieleniId.length;
  }
  public set przydzieleniId(przydzieleniId:number[]){
    this._przydzieleniId = przydzieleniId;
  }
}
