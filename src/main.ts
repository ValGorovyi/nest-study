import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let lConfigService = app.get(ConfigService)
  let port = lConfigService.get('PORT')
  console.log(lConfigService)
  await app.listen(port);
}
bootstrap();
