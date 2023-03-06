import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { AppModule } from './src/app.module';

const createFunction = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule);
  await app.init();
};

export const api = functions.https.onRequest(async () => {
  await createFunction();
});
