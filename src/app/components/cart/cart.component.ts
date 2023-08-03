import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartNumber: number = 0;
  selectedTickets: any[] = [];
  addToCart(show: any, ticket: any) {
    this.selectedTickets.push({ show, ticket });
    this.cartNumber = this.selectedTickets.length;
  }
}
