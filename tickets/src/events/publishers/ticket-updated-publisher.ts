import { Publisher, TicketUpdatedEvent, Subjects } from '@hftickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
