import { OrderStatus } from './interfaces/order-status';
import { Message } from './message';
import { Percistency } from './persistency';
import { ShoppingCard } from './shopping-cart';

export class Order {
  private _orderSatus: OrderStatus = 'open';

  constructor(
    private readonly card: ShoppingCard,
    private readonly messaging: Message,
    private readonly percistency: Percistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderSatus;
  }

  checkout(): void {
    if (this.card.isEmpty()) {
      console.log('Seu carrinho está vazio');
    }

    this._orderSatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido com total de ${this.card.total()} foi recebido`,
    );
    this.percistency.saveOrder();
    this.card.clear();
  }
}
