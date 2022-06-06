import {Publisher,TicketCreatedEvent, Subjects} from '@hftickets/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated
}