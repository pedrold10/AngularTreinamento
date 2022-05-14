import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacardapiosComponent } from './listacardapios.component';

describe('ListacardapiosComponent', () => {
  let component: ListacardapiosComponent;
  let fixture: ComponentFixture<ListacardapiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacardapiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacardapiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
