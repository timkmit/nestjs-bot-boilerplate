import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { session } from 'telegraf';
import { MainMenuScene } from './scenes/main.scene';
import { UsersModule } from '../users/users.module';
import { Scene1 } from './scenes/first.scene';
import { Scene2 } from './scenes/second.scene';
import { Scene3 } from './scenes/third.scene';
import { GreetingScene } from './scenes/greeting.scene';
import { BotUpdate } from './bot.update';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        token: configService.get<string>('TELEGRAM_BOT_TOKEN'),
        middlewares: [session()],
      }),
    }),
    UsersModule,
  ],
  providers: [
    MainMenuScene, 
    Scene1, 
    Scene2, 
    Scene3, 
    GreetingScene, 
    BotUpdate]
    ,
})
export class BotModule {}
