import { Publisher, OrderCancelledEvent, Subjects } from '@hftickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
