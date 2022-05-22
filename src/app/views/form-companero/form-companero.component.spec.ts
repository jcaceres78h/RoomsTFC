import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompaneroComponent } from './form-companero.component';

describe('FormCompaneroComponent', () => {
  let component: FormCompaneroComponent;
  let fixture: ComponentFixture<FormCompaneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCompaneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompaneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
