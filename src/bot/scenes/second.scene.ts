import { Ctx, Scene, SceneEnter } from "nestjs-telegraf";
import { Markup } from "telegraf";
import { CustomContext } from "../intefraces/context.interface";

@Scene('scene_2')
export class Scene2 {
  @SceneEnter()
  async onSceneEnter(@Ctx() ctx: CustomContext): Promise<void> {
    ctx.session.currentScene = 'scene_2';
    ctx.session.userName = ctx.from?.first_name || 'Visitor';
    await ctx.reply(
      `Hi, ${ctx.session.userName}! You are on scene 2.`,
      Markup.keyboard([
        ['⬅️ Go to menu', '➡️ Go to scene 3']
      ]).resize()
    );
  }
}