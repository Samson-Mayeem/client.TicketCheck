import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  shows = [    
    {
          name: 'Show 1',      
          image: 'https://via.placeholder.com/150',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',      
          tickets:
          [        
            { name: 'Ticket 1', price: 10 },        
            { name: 'Ticket 2', price: 15 }      
          ]
    },
    {
      name: 'Show 2',
      image: 'https://via.placeholder.com/150',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tickets: [
        { name: 'Ticket 1', price: 10 },
        { name: 'Ticket 2', price: 15 }
      ]
    },
    {
      name: 'Show 3',
      image: 'https://via.placeholder.com/150',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tickets: [
        { name: 'Ticket 1', price: 10 },
        { name: 'Ticket 2', price: 15 }
      ]
    }
  ];

  cart: any[] = [];

  addToCart(show: any, ticket: any) {
    const item = { show, ticket };
    this.cart.push(item);
  }
}
