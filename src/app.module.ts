import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepModule } from './rep/rep.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration/configuration';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration]
  }),
  SequelizeModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      dialect: 'postgres',
      host: configService.get('db_host'),
      port: configService.get('db_port'),
      name: configService.get('db_name'),
      password: configService.get('db_password'),
      username: configService.get('db_user'),
      synchronize: true,
      autoLoadModels: true,
    })
  }), RepModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
