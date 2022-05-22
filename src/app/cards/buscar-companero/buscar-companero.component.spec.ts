import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCompaneroComponent } from './buscar-companero.component';

describe('BuscarCompaneroComponent', () => {
  let component: BuscarCompaneroComponent;
  let fixture: ComponentFixture<BuscarCompaneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarCompaneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarCompaneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
