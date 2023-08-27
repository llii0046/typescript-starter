import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SwaggerModule,
  DocumentBuilder,
} from '@nestjs/swagger';

export function setupSwagger(
  app: INestApplication,
) {
  const config = app.get(ConfigService);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('NestJS API Documentation')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('nestjs')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(
    app,
    swaggerConfig,
  );
  SwaggerModule.setup(
    config.get('SWAGGER_PATH'),
    app,
    document,
  );
}
