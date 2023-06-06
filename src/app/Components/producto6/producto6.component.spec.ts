import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Producto6Component } from './producto6.component';

describe('Producto6Component', () => {
  let component: Producto6Component;
  let fixture: ComponentFixture<Producto6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Producto6Component]
    });
    fixture = TestBed.createComponent(Producto6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
