import { Injectable } from '@nestjs/common';

export interface Service {
  getHello(): string;
}

@Injectable()
export class AppService implements Service {
  getHello(): string {
    return 'Hello World!';
  }
}
