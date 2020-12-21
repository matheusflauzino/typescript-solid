import { Message } from './services/message';
import { Order } from './classes/order';
import { Percistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCard } from './classes/shopping-cart';
import { FiftyPercentDiscount } from './classes/discount';
const fifityPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCard(fifityPercentDiscount);
const messaging = new Message();
const percistency = new Percistency();
const order = new Order(shoppingCart, messaging, percistency);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Camiseta', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());

console.log(order.checkout());
