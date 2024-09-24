import { Component } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html'
})
export class CartDetailsComponent {

  constructor(public cart: Cart) {
    
  }
}
