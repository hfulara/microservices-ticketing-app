import { Publisher, OrderCreatedEvent, Subjects } from '@hftickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
