import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosCompanerosComponent } from './resultados-companeros.component';

describe('ResultadosCompanerosComponent', () => {
  let component: ResultadosCompanerosComponent;
  let fixture: ComponentFixture<ResultadosCompanerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosCompanerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosCompanerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
