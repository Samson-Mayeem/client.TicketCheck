import { Component } from '@angular/core';

import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartNumber: number = 0;

  constructor(private cartService: CartService) {
    this.cartNumber = this.cartService.getCartCount();
  }
}
