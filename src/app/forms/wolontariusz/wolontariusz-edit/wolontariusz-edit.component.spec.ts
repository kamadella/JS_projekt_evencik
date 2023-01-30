import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WolontariuszEditComponent } from './wolontariusz-edit.component';

describe('WolontariuszEditComponent', () => {
  let component: WolontariuszEditComponent;
  let fixture: ComponentFixture<WolontariuszEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WolontariuszEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WolontariuszEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
