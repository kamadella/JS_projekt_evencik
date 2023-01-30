import { IWolontariusz } from './Interfaces/IWolontariusz';
export class Wolontariusz implements IWolontariusz {
  //private static wolontariusze: Wolontariusz[] = []; //lista wszstkich wolontariuszy
  //private static activeAmount: number = 0; // liczba dostępnych wolontariuszy (do iteracji) [bez kopii]
  //private static amount: number = 0; // liczba stworzynych wolontariuszy [bez kopii]
  //private _active: boolean = true;//określa czy wolontariusz nie został jeszcze usunięty
  //private _indeks: number;//indeks stworzonego wolontariusza

  private _imie: string;
  private _nazwisko: string;
  private _telefon: number;
  private _wiek: number;
  private _dorosly?:boolean;

  constructor(imie:string="",nazwisko:string="",telefon:number=-1,wiek:number=-1){
    // if(wiek===-1){
    //   this._indeks = -1;
    // }
    // else{
    //   Wolontariusz.wolontariusze.push(this);
    //   Wolontariusz.activeAmount++;

    //   this._indeks = Wolontariusz.amount++;
    // }

    this._imie = imie;
    this._nazwisko = nazwisko;
    this._telefon = telefon;
    this._wiek = wiek;
  }

  //#region get/set
  // public get indeks() : number{
  //   return this._indeks;
  // }

  // public get active() : Boolean{
  //   return this._active;
  // }

  public get imie() : string {
      return this._imie;
  }
  public set imie(imie:string){
      this._imie = imie;
  }

  public get nazwisko() : string {
    return this._nazwisko;
  }
  public set nazwisko(nazwisko:string){
    this._nazwisko = nazwisko;
  }

  public get wiek():number{
    return this._wiek;
  }
  public set wiek(wiek:number){
    this._wiek = wiek;
  }

  public get telefon():number{
    return this._telefon;
  }
  public set telefon(telefon:number){
    this._telefon = telefon;
  }

  //#endregion

  public Copy(org:Wolontariusz):Wolontariusz{
    let copy:Wolontariusz = new Wolontariusz();

    copy._imie = org._imie
    copy._nazwisko = org._nazwisko
    copy._telefon = org._telefon
    copy._wiek = org._wiek

    return copy;
  }

  public CopyTo(source:Wolontariusz, target:Wolontariusz){
    target._imie = source._imie
    target._nazwisko = source._nazwisko
    target._telefon = source._telefon
    target._wiek = source._wiek
  }

}
