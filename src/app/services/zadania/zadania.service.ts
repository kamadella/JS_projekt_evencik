import { ZadanieMap } from 'src/types/Maps/ZadanieMap';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Zadanie } from '../../../types/Zadanie';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IZadanie } from 'src/types/Interfaces/IZadanie';

@Injectable({
  providedIn: 'root'
})

export class ZadaniaService {
  zadania:Zadanie[]=[];
  private url = 'http://localhost:3000/zadania';

  constructor(private http: HttpClient) {
  }

  getZadaniaSynch():Zadanie[]{
    return this.zadania;
  }

  getZadaniaAsynch():Observable<Zadanie[]>{
    //return of(this.zadania);
    return this.http.get<Zadanie[]>(this.url)
    .pipe(
      catchError(this.handleError<Zadanie[]>('getZadanie', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' failed' + error);
      return of(result as T);
    };
  }

  addZadanie(zadanie: Zadanie): Observable<IZadanie> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log(zadanie);
    return this.http.post<ZadanieMap>(this.url, new ZadanieMap(zadanie), httpOptions)
      .pipe(
        catchError(this.handleError<ZadanieMap>('addZadanie'))
      );
  }
/*
  editZadanie(editedZadanie: Zadanie, nr:number):void{
    this.zadania[nr]=editedZadanie;
  }
*/

  getZadanie(id:number):Observable<Zadanie>{
    const newUrl = `${this.url}/${id}`;
    return this.http.get<Zadanie>(newUrl);
  }


  deleteZadanie(id:number):Observable<Zadanie>{
    const newUrl = `${this.url}/${id}`;
    return this.http.delete<Zadanie>(newUrl);
  }

  editZadanie(zadanie:Zadanie):Observable<Zadanie>{
    const newUrl = `${this.url}/${zadanie.id}`;
    return this.http.put<Zadanie>(newUrl, zadanie);
  }


}
