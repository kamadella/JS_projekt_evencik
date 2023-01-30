import { Wolontariusz } from './../../types/Wolontariusz';
import { Component, Input, OnInit } from '@angular/core';
import { WolontariuszeService } from '../services/wolontariusze/wolontariusze.service';

@Component({
  selector: 'app-wolontariusze',
  templateUrl: './wolontariusze.component.html',
  styleUrls: ['./wolontariusze.component.css']
})
export class WolontariuszeComponent implements OnInit {

  selected: number = -1;
  wolontariusze: Wolontariusz[] = [];

  // Wolos = new Array(
  //   new Wolontariusz("Jurek","Kowal",65476, 3),
  //   new Wolontariusz("Spawacz","YOLO", 2, 2),
  //   new Wolontariusz("troll","ameba", 2,1)
  // );

  constructor(private woloService: WolontariuszeService) {
    woloService.getWolontariuszeAsynch().subscribe(data=>this.wolontariusze=data);
   }

  ngOnInit(): void {
  }

  selectWolo(i:number):void{
    this.selected = i;
  }

  addWolontariusz() {
    const wolo = new Wolontariusz('Stephen','Norman' ,666999777, 18);
    this.woloService.addWolontariusz(wolo).subscribe(ret => this.wolontariusze.push(wolo));
  }

}
