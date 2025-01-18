import { Ctx, Scene, SceneEnter } from "nestjs-telegraf";
import { Markup } from "telegraf";

@Scene('greeting_scene')
export class GreetingScene {
  @SceneEnter()
  async onSceneEnter(@Ctx() ctx: any): Promise<void> {
    const userName = ctx.from?.first_name || "Гость";
    await ctx.reply(
      `Hi, ${userName}! You are welcome!`,
      Markup.inlineKeyboard([
        Markup.button.callback('⬅️ Go to scene 1', 'go_to_scene_1'),
        Markup.button.callback('➡️ Go to scene 2', 'go_to_scene_2'),
        Markup.button.callback('➡️ Go to scene 3', 'go_to_scene_3'),
      ])
    );
  }
}