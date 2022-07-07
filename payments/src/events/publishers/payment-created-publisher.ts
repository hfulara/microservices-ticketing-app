import { Subjects, Publisher, PaymentCreatedEvent } from '@hftickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
