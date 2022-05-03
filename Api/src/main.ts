import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  Logger.log(`App will listen on port ${process.env.PORT}`);
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      transform: true,
      validationError: {
        target: true,
        value: true,
      },
    }),
  );
  app.setGlobalPrefix('api/v1');
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
