import { Injectable } from '@nestjs/common';
import { Ctx, Scene, Action, Command, On, Update } from 'nestjs-telegraf';
import { CustomContext } from './intefraces/context.interface';

@Update()
@Injectable()
export class BotUpdate {
  @Command('start')
  async onStart(@Ctx() ctx: CustomContext): Promise<void> {
    console.log('Start command received'); 
    await ctx.scene.enter('greeting_scene');
  }

  @Action('⬅️ Go to menu')
  async onGoToMenu(@Ctx() ctx: CustomContext): Promise<void> {
    await ctx.scene.enter('main_menu');
  }

  @Action('➡️ Go to scene 2')
  async onGoToScene2(@Ctx() ctx: CustomContext): Promise<void> {
    await ctx.scene.enter('scene_2');
  }

  @Action('➡️ Go to scene 3')
  async onGoToScene3(@Ctx() ctx: CustomContext): Promise<void> {
    await ctx.scene.enter('scene_3');
  }

  @Action('⬅️ Go to scene 1')
  async onGoToScene1(@Ctx() ctx: CustomContext): Promise<void> {
    await ctx.scene.enter('scene_1');
  }
}
