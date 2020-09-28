import { BotAction } from './action-types';
import { DiscordMessage, DiscordReaction, DiscordUser } from './discord-types';

export enum ModuleType {
    Cowsay,
    Welcomer,
    ReactRoles,
    StackOverflow,
    Announcer,
}

export interface BaseModule {
    type: ModuleType;
}

export interface CowsayModule extends BaseModule {
    type: ModuleType.Cowsay;
    prefix: 'cowsay';
    say: (message: string) => string;
}

export interface WelcomerModule extends BaseModule {
    type: ModuleType.Welcomer;
    welcomeUser: (user: DiscordUser) => BotAction;
    waveAtUser: (message: DiscordMessage) => BotAction;
}

export interface ReactRolesModule extends BaseModule {
    type: ModuleType.ReactRoles;
    grantRole: (user: DiscordUser, reaction: DiscordReaction) => BotAction;
    revokeRole: (user: DiscordUser, reaction: DiscordReaction) => BotAction;
}

export type BotModule =
    | CowsayModule
    | WelcomerModule
    | ReactRolesModule
