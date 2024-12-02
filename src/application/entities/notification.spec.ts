import { Content } from './content';
import { Notification } from './notification';

describe('Notification.class', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: 'fake-recipient-id',
      content: new Content('Você recebeu uma nova notificação'),
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });

  it('should get notification values', () => {
    const notification = new Notification({
      recipientId: 'fake-recipient-id',
      content: new Content('Você recebeu uma nova notificação'),
      category: 'social',
    });

    expect(notification.id).toBe(notification.id);
    expect(notification.recipientId).toBe(notification.recipientId);
    expect(notification.content).toBe(notification.content);
    expect(notification.category).toBe(notification.category);
    expect(notification.createdAt).toBe(notification.createdAt);
    expect(notification.readAt).toBe(notification.readAt);
  });

  it('should update notification values', () => {
    const notification = new Notification({
      recipientId: 'fake-recipient-id',
      content: new Content('Você recebeu uma nova notificação'),
      category: 'social',
    });

    notification.recipientId = 'new-fake-recipient-id';
    notification.content = new Content('Nova notificação');
    notification.category = 'new-category';
    notification.readAt = new Date();

    expect(notification.recipientId).toBe(notification.recipientId);
    expect(notification.content).toBe(notification.content);
    expect(notification.category).toBe(notification.category);
    expect(notification.readAt).toBe(notification.readAt);
  });
});
