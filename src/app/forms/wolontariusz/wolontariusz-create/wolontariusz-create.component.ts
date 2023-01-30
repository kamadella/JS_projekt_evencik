import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WolontariuszeService } from 'src/app/services/wolontariusze/wolontariusze.service';
import { Wolontariusz } from 'src/types/Wolontariusz';

@Component({
  selector: 'app-wolontariusz-create',
  templateUrl: './wolontariusz-create.component.html',
  styleUrls: ['./wolontariusz-create.component.css','../../style.css']
})
export class WolontariuszCreateComponent implements OnInit {

  formModel:FormGroup;

  constructor(private router: Router, private woloService: WolontariuszeService) {
      woloService.getWolontariuszeAsynch().subscribe();

      this.formModel = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone: new FormControl('',[Validators.required, Validators.min(100000000),Validators.max(999999999)]),
      age: new FormControl('',[Validators.required, Validators.min(14)]),
    });
  }

  get name(){
    return this.formModel.get('name');
  }

  get surName(){
    return this.formModel.get('surName');
  }

  get phone(){
    return this.formModel.get('phone');
  }

  get age(){
    return this.formModel.get('age');
  }

  ngOnInit(): void {
  }

  addWolontariusz() {
    const wolo = new Wolontariusz(this.formModel.value.name, this.formModel.value.surName, this.formModel.value.phone, this.formModel.value.age);
    this.woloService.addWolontariusz(wolo).subscribe();
    this.router.navigate(['/wolo']);
  }
}
