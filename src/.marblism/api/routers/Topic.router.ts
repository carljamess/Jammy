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

        createMany: procedure.input($Schema.TopicInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).topic.createMany(input as any))),

        create: procedure.input($Schema.TopicInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).topic.create(input as any))),

        deleteMany: procedure.input($Schema.TopicInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).topic.deleteMany(input as any))),

        delete: procedure.input($Schema.TopicInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).topic.delete(input as any))),

        findFirst: procedure.input($Schema.TopicInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).topic.findFirst(input as any))),

        findMany: procedure.input($Schema.TopicInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).topic.findMany(input as any))),

        findUnique: procedure.input($Schema.TopicInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).topic.findUnique(input as any))),

        updateMany: procedure.input($Schema.TopicInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).topic.updateMany(input as any))),

        update: procedure.input($Schema.TopicInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).topic.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TopicCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TopicCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TopicCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TopicCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TopicCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TopicCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TopicGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TopicGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TopicCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TopicCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TopicGetPayload<T>, Context>) => Promise<Prisma.TopicGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TopicDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TopicDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TopicDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TopicDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TopicDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TopicDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TopicGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TopicGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TopicDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TopicDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TopicGetPayload<T>, Context>) => Promise<Prisma.TopicGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TopicFindFirstArgs, TData = Prisma.TopicGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TopicFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TopicGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TopicFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TopicFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TopicGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TopicGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TopicFindManyArgs, TData = Array<Prisma.TopicGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.TopicFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TopicGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TopicFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TopicFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TopicGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TopicGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TopicFindUniqueArgs, TData = Prisma.TopicGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TopicFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TopicGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TopicFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TopicFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TopicGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TopicGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TopicUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TopicUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TopicUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TopicUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TopicUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TopicUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TopicGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TopicGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TopicUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TopicUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TopicGetPayload<T>, Context>) => Promise<Prisma.TopicGetPayload<T>>
            };

    };
}
