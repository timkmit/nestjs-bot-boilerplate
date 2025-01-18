import { Ctx, Scene, SceneEnter } from "nestjs-telegraf";
import { Markup } from "telegraf";
import { CustomContext } from "../intefraces/context.interface";
import { UsersService } from "../../users/users.service";

@Scene('main_menu')
export class MainMenuScene {
  constructor(private readonly usersService: UsersService) {}

  @SceneEnter()
  async onSceneEnter(@Ctx() ctx: CustomContext): Promise<void> {
    ctx.session.currentScene = 'main_menu';

    const username = ctx.from?.username || 'unknown';
    const firstName = ctx.from?.first_name || 'Guest';
    const lastName = ctx.from?.last_name || 'Guest';

    const user = await this.usersService.createUser({
      username,
      firstName,
      lastName,
    });

    await ctx.reply(
      `Main menu. User ${user.firstName} created.`,
      Markup.keyboard([
        ['🔎 Scene 1', '✍️ Scene 2'], 
        ['✅ Scene 3']])
        .resize()
    );
  }
}
