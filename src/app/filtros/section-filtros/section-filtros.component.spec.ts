import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFiltrosComponent } from './section-filtros.component';

describe('SectionFiltrosComponent', () => {
  let component: SectionFiltrosComponent;
  let fixture: ComponentFixture<SectionFiltrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFiltrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
