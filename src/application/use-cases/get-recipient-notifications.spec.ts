import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('GetRecipientNotifications.class', () => {
  it('should be able to get all recipient notifications', async () => {
    const inMemoryNotificationsRepository =
      new InMemoryNotificationsRepository();

    const getRecipientNotifications = new GetRecipientNotifications(
      inMemoryNotificationsRepository,
    );

    await inMemoryNotificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-1' }),
    );

    await inMemoryNotificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-1' }),
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient-id-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-id-1' }),
        expect.objectContaining({ recipientId: 'recipient-id-1' }),
      ]),
    );
  });
});
