import { Context as ContextTelegraf, Scenes } from 'telegraf';

export interface CustomSession extends Scenes.SceneSession {
  currentScene?: string;
  userName?: string;
}

export interface CustomContext extends ContextTelegraf, Scenes.SceneContext {
  session: CustomSession;
}
