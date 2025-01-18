import { Injectable } from '@nestjs/common';
import { Ctx, Scene, Action, Command, On, Update } from 'nestjs-telegraf';
import { CustomContext } from './intefraces/context.interface';

@Update()
@Injectable()
export class BotUpdate {
  @Command('start')
  async onStart(@Ctx() ctx: CustomContext): Promise<void> {
    console.log('Start command received, new user added');
    await ctx.scene.enter('greeting_scene');
  }

  @Action('go_to_scene_1')
  async onGoToScene1(@Ctx() ctx: CustomContext): Promise<void> {
    await ctx.scene.enter('scene_1');
  }

  @Action('go_to_scene_2')
  async onGoToScene2(@Ctx() ctx: CustomContext): Promise<void> {
    await ctx.scene.enter('scene_2');
  }

  @Action('go_to_scene_3')
  async onGoToScene3(@Ctx() ctx: CustomContext): Promise<void> {
    await ctx.scene.enter('scene_3');
  }

  @Action('go_to_menu')
  async onGoToMenu(@Ctx() ctx: CustomContext): Promise<void> {
    await ctx.scene.enter('main_menu');
  }
}
