import { Component, Input, OnInit } from '@angular/core';
import { Wolontariusz } from '../../types/Wolontariusz';

@Component({
  selector: '[app-osoba]',
  templateUrl: './osoba.component.html',
  styleUrls: ['./osoba.component.css']
})
export class OsobaComponent implements OnInit {

  @Input() wolontariusz: Wolontariusz;
  @Input() id: number;

  constructor() {
  }

  ngOnInit(): void { }

}
