import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Producto7Component } from './producto7.component';

describe('Producto7Component', () => {
  let component: Producto7Component;
  let fixture: ComponentFixture<Producto7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Producto7Component]
    });
    fixture = TestBed.createComponent(Producto7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
