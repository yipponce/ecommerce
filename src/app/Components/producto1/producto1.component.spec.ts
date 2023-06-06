import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Producto1Component } from './producto1.component';

describe('Producto1Component', () => {
  let component: Producto1Component;
  let fixture: ComponentFixture<Producto1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Producto1Component]
    });
    fixture = TestBed.createComponent(Producto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
