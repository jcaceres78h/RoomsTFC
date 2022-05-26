import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRoomByUserComponent } from './listar-room-by-user.component';

describe('ListarRoomByUserComponent', () => {
  let component: ListarRoomByUserComponent;
  let fixture: ComponentFixture<ListarRoomByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRoomByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRoomByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
