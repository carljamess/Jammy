/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createTopicRouter from "./Topic.router";
import createConversationRouter from "./Conversation.router";
import createMessageRouter from "./Message.router";
import createSavedItemRouter from "./SavedItem.router";
import createTopicQuestionRouter from "./TopicQuestion.router";
import createUserRouter from "./User.router";
import createAccountRouter from "./Account.router";
import createSessionRouter from "./Session.router";
import { ClientType as TopicClientType } from "./Topic.router";
import { ClientType as ConversationClientType } from "./Conversation.router";
import { ClientType as MessageClientType } from "./Message.router";
import { ClientType as SavedItemClientType } from "./SavedItem.router";
import { ClientType as TopicQuestionClientType } from "./TopicQuestion.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as SessionClientType } from "./Session.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        topic: createTopicRouter(router, procedure),
        conversation: createConversationRouter(router, procedure),
        message: createMessageRouter(router, procedure),
        savedItem: createSavedItemRouter(router, procedure),
        topicQuestion: createTopicQuestionRouter(router, procedure),
        user: createUserRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        session: createSessionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    topic: TopicClientType<AppRouter>;
    conversation: ConversationClientType<AppRouter>;
    message: MessageClientType<AppRouter>;
    savedItem: SavedItemClientType<AppRouter>;
    topicQuestion: TopicQuestionClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
}
