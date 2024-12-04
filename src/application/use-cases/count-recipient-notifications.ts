import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repositories';

interface CountRecipientNotificationsRequest {
  recipientId: string;
}

interface CountRecipientNotificationsResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotifications {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute({
    recipientId,
  }: CountRecipientNotificationsRequest): Promise<CountRecipientNotificationsResponse> {
    const count =
      await this.notificationsRepository.countManyByRecipientId(recipientId);

    return { count };
  }
}
