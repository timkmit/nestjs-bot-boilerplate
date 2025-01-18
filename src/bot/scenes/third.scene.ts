import { Ctx, Scene, SceneEnter } from "nestjs-telegraf";
import { Markup } from "telegraf";
import { CustomContext } from "../intefraces/context.interface";

@Scene('scene_3')
export class Scene3 {
  @SceneEnter()
  async onSceneEnter(@Ctx() ctx: CustomContext): Promise<void> {
    ctx.session.currentScene = 'scene_3';
    ctx.session.userName = ctx.from?.first_name || 'Visitor';
    await ctx.reply(
      `Hi, ${ctx.session.userName}! You are on scene 3.`,
      Markup.inlineKeyboard([
        Markup.button.callback('⬅️ Go to menu', 'go_to_menu'),
      ])
    );
  }
}