import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { UnReadNotification } from './unread-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('UnReadNotification.class', () => {
  it('should be able to unread a Notification', async () => {
    const inMemoryNotificationsRepository =
      new InMemoryNotificationsRepository();

    const unReadNotification = new UnReadNotification(
      inMemoryNotificationsRepository,
    );

    const notification = makeNotification({ readAt: new Date() });

    await inMemoryNotificationsRepository.create(notification);

    await unReadNotification.execute({
      notificationId: notification.id,
    });

    expect(inMemoryNotificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a non existing notification', async () => {
    const inMemoryNotificationsRepository =
      new InMemoryNotificationsRepository();
    const unReadNotification = new UnReadNotification(
      inMemoryNotificationsRepository,
    );

    expect(() =>
      unReadNotification.execute({
        notificationId: 'fake-notification-id',
      }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
