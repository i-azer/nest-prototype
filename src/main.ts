import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Using Express By Default u can change it to fastify
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
