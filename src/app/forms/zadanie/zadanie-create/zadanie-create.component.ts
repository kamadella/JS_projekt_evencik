import { ZadaniaService } from './../../../services/zadania/zadania.service';
import { Wolontariusz } from './../../../../types/Wolontariusz';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { WolontariuszeService } from 'src/app/services/wolontariusze/wolontariusze.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Zadanie } from 'src/types/Zadanie';
import { IWolontariusz } from 'src/types/Interfaces/IWolontariusz';

@Component({
  selector: 'app-zadanie-create',
  templateUrl: './zadanie-create.component.html',
  styleUrls: ['./zadanie-create.component.css','../../style.css']
})
export class ZadanieCreateComponent implements OnInit {

  wszyscy:string[]=[];
  przypisani:string[]=[];

  wszyscyWolo:IWolontariusz[]=[];
  przypisaniWolo:IWolontariusz[]=[];

  eventId:number;

  formModel:FormGroup;

  constructor(private router: Router, private woloService: WolontariuszeService, private route: ActivatedRoute, private zadaniaService: ZadaniaService) {
    woloService.getWolontariuszeAsynch().subscribe(data=>data.map(osoba=>{
    this.wszyscy.push(osoba.imie);
    this.wszyscyWolo.push(osoba)}));

    this.route.params.subscribe( params=> this.eventId = params['id']);

    this.formModel = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('',[Validators.required]),
      amount: new FormControl('',[Validators.required, Validators.min(1)]),
    });
   }

  get name(){
    return this.formModel.get('name');
  }

  get startDate(){
    return this.formModel.get('startDate');
  }

  get endDate(){
    return this.formModel.get('endDate');
  }

  get amount(){
    return this.formModel.get('amount');
  }

  ngOnInit(): void {
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

  private array_move(arr: IWolontariusz[], old_index: number, new_index:number) {
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  }
  private array_transfer(oldArr: IWolontariusz[], newArr: IWolontariusz[], old_index: number, new_index:number) {
    newArr.splice(new_index, 0, oldArr.splice(old_index, 1)[0]);
  }

  addZadanie() {
    let zad = new Zadanie(0, this.formModel.value.name,this.formModel.value.amount,this.przypisaniWolo.length,this.formModel.value.startDate,this.formModel.value.endDate,this.eventId);
    this.przypisaniWolo.forEach(x=>zad.przydzieleniId.push(x.id??0));

    //console.log(zad);
    console.log("addZadanie (zadanie-create) "+ this.eventId);

    this.zadaniaService.addZadanie(zad).subscribe();
    this.router.navigate(['/event/list/'+[this.eventId]]);
  }

}
