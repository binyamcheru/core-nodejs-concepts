const EventEmitter = require('events');

class OrderSystem extends EventEmitter {
  placeOrder(order) {
    console.log(`Order received for ${order.item}`);

    // Emit event
    this.emit('orderPlaced', order);
  }
}

module.exports = OrderSystem;
