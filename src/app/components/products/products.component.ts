import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  shows = [
    {
          name: 'Music Show',
          image: 'assets/images/logo.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          tickets:
          [
            { name: 'Single', price: 10 },
            { name: 'Couple', price: 15 }
          ]
    },
    {
      name: 'Live Band',
      image: 'https://via.placeholder.com/150',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tickets: [
        { name: 'Single', price: 10 },
        { name: 'Couple', price: 15 }
      ]
    },
    {
      name: 'Comedy Night',
      image: 'https://via.placeholder.com/150',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tickets: [
        { name: 'Single', price: 10 },
        { name: 'Couple', price: 15 }
      ]
    }
  ];

  cart: any[] = [];

  addToCart(show: any, ticket: any) {
    const item = { show, ticket };
    this.cart.push(item);
  }
}
