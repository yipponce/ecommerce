import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTarjetaComponent } from './cart.tarjeta.component';

describe('CartTarjetaComponent', () => {
  let component: CartTarjetaComponent;
  let fixture: ComponentFixture<CartTarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartTarjetaComponent]
    });
    fixture = TestBed.createComponent(CartTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
