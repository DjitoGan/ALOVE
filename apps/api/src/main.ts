import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(helmet());
  app.setGlobalPrefix('v1');
  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`ALOVE API listening on http://localhost:${port}/v1`);
}
bootstrap();
