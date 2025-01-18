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
      Markup.inlineKeyboard([
        Markup.button.callback('⬅️ Go to menu', 'go_to_menu'),
        Markup.button.callback('➡️ Go to scene 3', 'go_to_scene_3'),
      ])
    );
  }
}