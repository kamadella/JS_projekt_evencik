import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WolontariuszCreateComponent } from './wolontariusz-create.component';

describe('WolontariuszCreateComponent', () => {
  let component: WolontariuszCreateComponent;
  let fixture: ComponentFixture<WolontariuszCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WolontariuszCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WolontariuszCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
