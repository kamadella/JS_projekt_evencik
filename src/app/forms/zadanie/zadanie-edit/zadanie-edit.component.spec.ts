import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadanieEditComponent } from './zadanie-edit.component';

describe('ZadanieEditComponent', () => {
  let component: ZadanieEditComponent;
  let fixture: ComponentFixture<ZadanieEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZadanieEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZadanieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
