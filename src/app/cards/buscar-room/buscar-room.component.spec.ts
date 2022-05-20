import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarRoomComponent } from './buscar-room.component';

describe('BuscarRoomComponent', () => {
  let component: BuscarRoomComponent;
  let fixture: ComponentFixture<BuscarRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
