import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Wolontariusz } from '../../../types/Wolontariusz';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WolontariuszMap } from 'src/types/Maps/WolontariuszMap';
import { IWolontariusz } from 'src/types/Interfaces/IWolontariusz';

@Injectable({
  providedIn: 'root'
})

export class WolontariuszeService  {
  wolontariusze:Wolontariusz[]=[];
  private url = 'http://localhost:3000/wolontariusze';


  constructor(private http: HttpClient) {
    /*
    this.zadania.push(new Zadanie("wypuść kota", 3, 2 ))
    this.zadania.push(new Zadanie("Zamieść scenę", 3)),
    this.zadania.push(new Zadanie("Ogarnąć pare kabli", 2, 2)),
    this.zadania.push(new Zadanie("Kupić pizzę", 2,1)),
    this.zadania.push(new Zadanie("Wyciścić WC")),
    this.zadania.push(new Zadanie("Zrób salto"))
    */
  }

  public getWolontariuszeSynch():Wolontariusz[]{
    return this.wolontariusze;
  }

  public getWolontariuszeAsynch():Observable<Wolontariusz[]>{
    //return of(this.zadania);
    return this.http.get<Wolontariusz[]>(this.url)
    .pipe(
      catchError(this.handleError<Wolontariusz[]>('getWolontariusz', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' failed' + error);
      return of(result as T);
    };
  }

  addWolontariusz(wolontariusz: Wolontariusz): Observable<IWolontariusz> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<WolontariuszMap>(this.url, new WolontariuszMap(wolontariusz), httpOptions)
      .pipe(
        catchError(this.handleError<Wolontariusz>('addWolontariusz'))
      );
  }

}
