import { Ctx, Scene, SceneEnter } from "nestjs-telegraf";
import { Markup } from "telegraf";

@Scene('greeting_scene')
export class GreetingScene {
  @SceneEnter()
  async onSceneEnter(@Ctx() ctx: any): Promise<void> {
    const userName = ctx.from?.first_name || "Гость";
    await ctx.reply(
      `Привет, ${userName}! Добро пожаловать!`,
      Markup.keyboard([
        ['🔎 Сцена 1', '✍️ Сцена 2'],
        ['✅ Сйцена 3', '❌ Сцена 4']
      ]).resize()
    );
  }
}