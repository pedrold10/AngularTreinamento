import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNovidadesComponent } from './list-novidades.component';

describe('ListNovidadesComponent', () => {
  let component: ListNovidadesComponent;
  let fixture: ComponentFixture<ListNovidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNovidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNovidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
