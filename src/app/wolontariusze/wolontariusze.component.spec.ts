import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WolontariuszeComponent } from './wolontariusze.component';

describe('WolontariuszeComponent', () => {
  let component: WolontariuszeComponent;
  let fixture: ComponentFixture<WolontariuszeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WolontariuszeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WolontariuszeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
