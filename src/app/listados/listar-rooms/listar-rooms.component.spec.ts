import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRoomsComponent } from './listar-rooms.component';

describe('ListarRoomsComponent', () => {
  let component: ListarRoomsComponent;
  let fixture: ComponentFixture<ListarRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
