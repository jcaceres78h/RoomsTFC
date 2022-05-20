import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosRoomComponent } from './resultados-room.component';

describe('ResultadosRoomComponent', () => {
  let component: ResultadosRoomComponent;
  let fixture: ComponentFixture<ResultadosRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
