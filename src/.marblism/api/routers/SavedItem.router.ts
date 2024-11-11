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

        createMany: procedure.input($Schema.SavedItemInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).savedItem.createMany(input as any))),

        create: procedure.input($Schema.SavedItemInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).savedItem.create(input as any))),

        deleteMany: procedure.input($Schema.SavedItemInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).savedItem.deleteMany(input as any))),

        delete: procedure.input($Schema.SavedItemInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).savedItem.delete(input as any))),

        findFirst: procedure.input($Schema.SavedItemInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).savedItem.findFirst(input as any))),

        findMany: procedure.input($Schema.SavedItemInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).savedItem.findMany(input as any))),

        findUnique: procedure.input($Schema.SavedItemInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).savedItem.findUnique(input as any))),

        updateMany: procedure.input($Schema.SavedItemInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).savedItem.updateMany(input as any))),

        update: procedure.input($Schema.SavedItemInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).savedItem.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SavedItemCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SavedItemCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SavedItemCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SavedItemCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SavedItemCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SavedItemCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SavedItemGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SavedItemGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SavedItemCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SavedItemCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SavedItemGetPayload<T>, Context>) => Promise<Prisma.SavedItemGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SavedItemDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SavedItemDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SavedItemDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SavedItemDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SavedItemDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SavedItemDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SavedItemGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SavedItemGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SavedItemDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SavedItemDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SavedItemGetPayload<T>, Context>) => Promise<Prisma.SavedItemGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SavedItemFindFirstArgs, TData = Prisma.SavedItemGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SavedItemFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SavedItemGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SavedItemFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SavedItemFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SavedItemGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SavedItemGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SavedItemFindManyArgs, TData = Array<Prisma.SavedItemGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.SavedItemFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SavedItemGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SavedItemFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SavedItemFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SavedItemGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SavedItemGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SavedItemFindUniqueArgs, TData = Prisma.SavedItemGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SavedItemFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SavedItemGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SavedItemFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SavedItemFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SavedItemGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SavedItemGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SavedItemUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SavedItemUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SavedItemUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SavedItemUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SavedItemUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SavedItemUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SavedItemGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SavedItemGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SavedItemUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SavedItemUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SavedItemGetPayload<T>, Context>) => Promise<Prisma.SavedItemGetPayload<T>>
            };

    };
}
