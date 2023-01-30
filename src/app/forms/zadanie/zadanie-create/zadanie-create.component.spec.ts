import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadanieCreateComponent } from './zadanie-create.component';

describe('ZadanieCreateComponent', () => {
  let component: ZadanieCreateComponent;
  let fixture: ComponentFixture<ZadanieCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZadanieCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZadanieCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
