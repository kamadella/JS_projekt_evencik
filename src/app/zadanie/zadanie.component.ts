import { Component, Input, OnInit } from '@angular/core';
import { Zadanie } from '../../types/Zadanie';
import { ZadaniaService } from '../services/zadania/zadania.service';


@Component({
  selector: '[app-zadanie]',
  templateUrl: './zadanie.component.html',
  styleUrls: ['./zadanie.component.css']
})
export class ZadanieComponent implements OnInit {

  edit:boolean = false;
  @Input() zadanie: Zadanie;
  @Input() id: number;


  constructor(private zadanieService: ZadaniaService) {
  }

  ngOnInit(): void {
    console.log("zadanie: id wydarzenia " +this.zadanie.eventId);
  }



  onDelete(){
    //window.location.reload();
    console.log(this.zadanie.id);
    this.zadanieService.deleteZadanie(this.zadanie.id).subscribe();
  }

}
