import { IEvent } from './Interfaces/IEvent';
import { Zadanie } from "./Zadanie";

export class Event implements IEvent{
  private _id:number;
  private _nazwa: string;
  private _dataPoczatek: Date;
  private _dataKoniec: Date;

  //#region  connections
  private _zadania: Zadanie[] = [];
  //#endregion

  constructor(id:number, nazwa:string = "", poczatek:Date = new Date(0), koniec:Date = new Date(0)){
    this._id = id;
    this._nazwa = nazwa;
    this._dataPoczatek = poczatek;
    this._dataKoniec = koniec;
  }

  //#region get/set
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

  public set czasPoczatek(czas:Date){
      this._dataPoczatek = czas;
  }
  public get czasPoczatek() : Date {
    return this._dataPoczatek;
  }

  public set czasKoniec(czas:Date){
    this._dataKoniec = czas;
  }
  public get czasKoniec() : Date {
    return this._dataKoniec;
  }

  public get zadania() : Zadanie[]{
    return this._zadania;
  }
  public set zadania(zadania:Zadanie[]){
    this.zadania = zadania;
  }
  //#endregion

  public addZadanie(zadanie:Zadanie){
    this._zadania.push(zadanie);
  }
  public removeZadanie(id:number){
    this._zadania.splice(id,1);
  }
}
