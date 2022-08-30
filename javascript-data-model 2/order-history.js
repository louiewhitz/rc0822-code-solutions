var orderHistory = [
  {
    deliveryDate: 'August 8th 2020',
    items: [{
      orderNumber: 11439416898772232,
      title: 'JavaScript for impatient programmers',
      author: 'Dr. Axel Rauschmayer',
      price: 31.55,
      type: 'book'
    }]
  },
  {
    deliveryDate: 'July 20th 2020',
    items: [{
      // eslint-disable-next-line no-loss-of-precision
      orderNumber: 11399842681280257,
      title: 'The Timeless way of building',
      author: 'Christopher Alexander',
      price: 41.53,
      type: 'book'
    }]
  },
  {
    deliveryDate: 'July 7th 2020',
    items: [{
      orderNumber: 11439416898772232,
      title: 'Super Smash Game Cube Adapter for WII U',
      author: 'N / A',
      price: 17.88,
      type: 'Adaptor'
    }]
  },
  {
    deliveryDate: 'July 5th 2020',
    items: [{
      orderNumber: 1132883177264826,
      title: 'Game Cube',
      author: 'N / A',
      price: 94.99,
      type: 'Game Cube Controller'
    },
    {
      orderNumber: 1132883177264826,
      title: 'The Art of Sql',
      author: 'Stephane Faroult',
      price: 33.99,
      type: 'book'
    }]
  }
];

console.log('Order History:', orderHistory);
