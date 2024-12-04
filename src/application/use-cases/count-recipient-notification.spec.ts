import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('CountRecipientNotifications.class', () => {
  it('should be able to count recipient notifications', async () => {
    const inMemoryNotificationsRepository =
      new InMemoryNotificationsRepository();

    const countRecipientNotifications = new CountRecipientNotifications(
      inMemoryNotificationsRepository,
    );

    await inMemoryNotificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-1' }),
    );

    await inMemoryNotificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-1' }),
    );

    await inMemoryNotificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-2' }),
    );

    let notificationsCount = await countRecipientNotifications.execute({
      recipientId: 'recipient-id-1',
    });

    expect(notificationsCount.count).toBe(2);

    notificationsCount = await countRecipientNotifications.execute({
      recipientId: 'recipient-id-2',
    });

    expect(notificationsCount.count).toBe(1);
  });
});
