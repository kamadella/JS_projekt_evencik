import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { WolontariuszeService } from 'src/app/services/wolontariusze/wolontariusze.service';
import { Wolontariusz } from 'src/types/Wolontariusz';
import { ActivatedRoute } from '@angular/router';
import { ZadaniaService } from 'src/app/services/zadania/zadania.service';

@Component({
  selector: 'app-zadanie-edit',
  templateUrl: './zadanie-edit.component.html',
  styleUrls: ['./zadanie-edit.component.css','../../style.css']
})
export class ZadanieEditComponent implements OnInit {

  wszyscy:string[]=[];
  przypisani:string[]=[];
  wszyscyWolo:Wolontariusz[]=[];
  przypisaniWolo:Wolontariusz[]=[];

  name?: string;
  startDate?: Date;
  endDate?: Date;
  age?: number;


  constructor(private woloService: WolontariuszeService, private zadaniaService: ZadaniaService, private route: ActivatedRoute) {
    woloService.getWolontariuszeAsynch().subscribe(data=>data.map(osoba=>{
    this.wszyscy.push(osoba.imie);
    this.wszyscyWolo.push(osoba)}));
   }

  ngOnInit(): void {
    this.route.params.subscribe((parameters) => this.zadaniaService.getZadanie(parameters['id']).subscribe((retrievedZadanie) => {
      this.name = retrievedZadanie.nazwa,
      this.startDate = retrievedZadanie.czasPoczatek
      this.endDate = retrievedZadanie.czasKoniec
      this.age = retrievedZadanie.wolontariuszeWymagani
    }));
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      if(event.container.data===this.wszyscy){
        this.array_move(this.wszyscyWolo, event.previousIndex, event.currentIndex);
      }
      else{
        this.array_move(this.przypisaniWolo, event.previousIndex, event.currentIndex);
      }
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      if(event.container.data===this.wszyscy){
        this.array_transfer(this.przypisaniWolo,this.wszyscyWolo, event.previousIndex, event.currentIndex);
      }
      else{
        this.array_transfer(this.wszyscyWolo,this.przypisaniWolo, event.previousIndex, event.currentIndex);
      }
    }
  }

  private array_move(arr: Wolontariusz[], old_index: number, new_index:number) {
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  }
  private array_transfer(oldArr: Wolontariusz[], newArr: Wolontariusz[], old_index: number, new_index:number) {
    newArr.splice(new_index, 0, oldArr.splice(old_index, 1)[0]);
  }
}
