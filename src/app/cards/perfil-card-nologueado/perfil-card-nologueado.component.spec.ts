import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCardNologueadoComponent } from './perfil-card-nologueado.component';

describe('PerfilCardNologueadoComponent', () => {
  let component: PerfilCardNologueadoComponent;
  let fixture: ComponentFixture<PerfilCardNologueadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilCardNologueadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilCardNologueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
