import { Publisher, ExpirationCompleteEvent, Subjects } from '@hftickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
