import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { setupSwagger } from './setup-swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  setupSwagger(app);
  await app.listen(3333);
  const serverUrl = await app.getUrl();
  Logger.log(
    `The API service has started, please visit: ${serverUrl}`,
  );
  Logger.log(
    `The API documentation has been generated, please visit: ${serverUrl}${process.env.SWAGGER_PATH}/`,
  );
}
bootstrap();
