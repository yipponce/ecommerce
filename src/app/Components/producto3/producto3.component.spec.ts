import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Producto3Component } from './producto3.component';

describe('Producto3Component', () => {
  let component: Producto3Component;
  let fixture: ComponentFixture<Producto3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Producto3Component]
    });
    fixture = TestBed.createComponent(Producto3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
