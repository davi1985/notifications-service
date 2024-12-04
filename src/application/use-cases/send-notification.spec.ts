import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('SendNotification.class', () => {
  it('should be able to send a Notification', async () => {
    const inMemoryNotificationsRepository =
      new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(
      inMemoryNotificationsRepository,
    );

    const { notification } = await sendNotification.execute({
      recipientId: 'fake-recipient-id',
      category: 'social',
      content: 'Você tem uma nova solicitação',
    });

    expect(inMemoryNotificationsRepository.notifications).toHaveLength(1);
    expect(inMemoryNotificationsRepository.notifications[0]).toEqual(
      notification,
    );
  });
});
