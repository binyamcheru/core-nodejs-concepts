const OrderSystem = require('./orderSystem');

const orderSystem = new OrderSystem();

// Email service listener
orderSystem.on('orderPlaced', (order) => {
  console.log(`Email sent for order: ${order.item}`);
});

// Analytics service listener
orderSystem.on('orderPlaced', (order) => {
  console.log(`Analytics updated for order: ${order.item}`);
});

// invoice service listener
orderSystem.on('orderPlaced', (order) => {
  console.log(`Invoice generated for order: ${order.item}`);
});

// Place an order
orderSystem.placeOrder({
  id: 1,
  item: "MacBook Pro",
  price: 2500
});
