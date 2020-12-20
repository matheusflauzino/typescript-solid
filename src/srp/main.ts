import { Message } from './message';
import { Order } from './order';
import { Percistency } from './persistency';
import { Product } from './product';
import { ShoppingCard } from './shopping-cart';

const shoppingCart = new ShoppingCard();
const messaging = new Message();
const percistency = new Percistency();
const order = new Order(shoppingCart, messaging, percistency);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Camiseta', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());

console.log(order.checkout());
