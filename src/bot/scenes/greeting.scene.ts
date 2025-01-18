import { Ctx, Scene, SceneEnter } from "nestjs-telegraf";
import { Markup } from "telegraf";

@Scene('greeting_scene')
export class GreetingScene {
  @SceneEnter()
  async onSceneEnter(@Ctx() ctx: any): Promise<void> {
    const userName = ctx.from?.first_name || "Гость";
    await ctx.reply(
      `Hi, ${userName}! You are welcome!`,
      Markup.keyboard([
        ['⬅️ Go to scene 1', '➡️ Go to scene 2'],
        ['➡️ Go to scene 3']
      ]).resize()
    );
  }
}