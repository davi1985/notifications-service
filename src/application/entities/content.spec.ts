import { Content } from './content';

describe('Content.class', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a notification with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });

  it('should return the content value', () => {
    const content = new Content('Você tem uma nova solicitação');

    expect(content.value).toBe('Você tem uma nova solicitação');
  });
});
