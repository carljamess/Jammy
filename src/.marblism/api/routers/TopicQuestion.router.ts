/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.TopicQuestionInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).topicQuestion.createMany(input as any))),

        create: procedure.input($Schema.TopicQuestionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).topicQuestion.create(input as any))),

        deleteMany: procedure.input($Schema.TopicQuestionInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).topicQuestion.deleteMany(input as any))),

        delete: procedure.input($Schema.TopicQuestionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).topicQuestion.delete(input as any))),

        findFirst: procedure.input($Schema.TopicQuestionInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).topicQuestion.findFirst(input as any))),

        findMany: procedure.input($Schema.TopicQuestionInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).topicQuestion.findMany(input as any))),

        findUnique: procedure.input($Schema.TopicQuestionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).topicQuestion.findUnique(input as any))),

        updateMany: procedure.input($Schema.TopicQuestionInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).topicQuestion.updateMany(input as any))),

        update: procedure.input($Schema.TopicQuestionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).topicQuestion.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TopicQuestionCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TopicQuestionCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TopicQuestionCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TopicQuestionCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TopicQuestionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TopicQuestionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TopicQuestionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TopicQuestionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TopicQuestionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TopicQuestionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TopicQuestionGetPayload<T>, Context>) => Promise<Prisma.TopicQuestionGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TopicQuestionDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TopicQuestionDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TopicQuestionDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TopicQuestionDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TopicQuestionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TopicQuestionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TopicQuestionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TopicQuestionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TopicQuestionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TopicQuestionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TopicQuestionGetPayload<T>, Context>) => Promise<Prisma.TopicQuestionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TopicQuestionFindFirstArgs, TData = Prisma.TopicQuestionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TopicQuestionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TopicQuestionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TopicQuestionFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TopicQuestionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TopicQuestionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TopicQuestionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TopicQuestionFindManyArgs, TData = Array<Prisma.TopicQuestionGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.TopicQuestionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TopicQuestionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TopicQuestionFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TopicQuestionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TopicQuestionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TopicQuestionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TopicQuestionFindUniqueArgs, TData = Prisma.TopicQuestionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TopicQuestionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TopicQuestionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TopicQuestionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TopicQuestionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TopicQuestionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TopicQuestionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TopicQuestionUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TopicQuestionUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TopicQuestionUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TopicQuestionUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TopicQuestionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TopicQuestionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TopicQuestionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TopicQuestionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TopicQuestionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TopicQuestionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TopicQuestionGetPayload<T>, Context>) => Promise<Prisma.TopicQuestionGetPayload<T>>
            };

    };
}
