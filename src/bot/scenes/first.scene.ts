import { Ctx, Scene, SceneEnter } from "nestjs-telegraf";
import { Markup } from "telegraf";
import { CustomContext } from "../intefraces/context.interface";

@Scene('scene_1')
export class Scene1 {
  @SceneEnter()
  async onSceneEnter(@Ctx() ctx: CustomContext): Promise<void> {
    ctx.session.currentScene = 'scene_1';
    ctx.session.userName = ctx.from?.first_name || 'Visitor';
    await ctx.reply(
      `Hi, ${ctx.session.userName}! You are on scene 1.`,
      Markup.keyboard([
        ['⬅️ Go to menu', '➡️ Go to scene 2']
      ]).resize()
    );
  }
}