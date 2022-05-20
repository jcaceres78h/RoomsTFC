import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarRoomComponent } from './publicar-room.component';

describe('PublicarRoomComponent', () => {
  let component: PublicarRoomComponent;
  let fixture: ComponentFixture<PublicarRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicarRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
