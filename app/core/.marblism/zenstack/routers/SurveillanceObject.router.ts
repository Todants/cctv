/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from '.'
import * as _Schema from '@zenstackhq/runtime/zod/input'
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema
import { checkRead, checkMutate } from '../helper'
import type { Prisma } from '@prisma/client'
import type {
  UseTRPCMutationOptions,
  UseTRPCMutationResult,
  UseTRPCQueryOptions,
  UseTRPCQueryResult,
  UseTRPCInfiniteQueryOptions,
  UseTRPCInfiniteQueryResult,
} from '@trpc/react-query/shared'
import type { TRPCClientErrorLike } from '@trpc/client'
import type { AnyRouter } from '@trpc/server'

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    createMany: procedure
      .input($Schema.SurveillanceObjectInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).surveillanceObject.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.SurveillanceObjectInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).surveillanceObject.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.SurveillanceObjectInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).surveillanceObject.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.SurveillanceObjectInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).surveillanceObject.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.SurveillanceObjectInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).surveillanceObject.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.SurveillanceObjectInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).surveillanceObject.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.SurveillanceObjectInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).surveillanceObject.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.SurveillanceObjectInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).surveillanceObject.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.SurveillanceObjectInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).surveillanceObject.update(input as any)),
      ),

    count: procedure
      .input($Schema.SurveillanceObjectInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).surveillanceObject.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.SurveillanceObjectCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.SurveillanceObjectCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.SurveillanceObjectCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.SurveillanceObjectCreateManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  create: {
    useMutation: <T extends Prisma.SurveillanceObjectCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.SurveillanceObjectCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SurveillanceObjectGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.SurveillanceObjectGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.SurveillanceObjectCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.SurveillanceObjectCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.SurveillanceObjectGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.SurveillanceObjectGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.SurveillanceObjectDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.SurveillanceObjectDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.SurveillanceObjectDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.SurveillanceObjectDeleteManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  delete: {
    useMutation: <T extends Prisma.SurveillanceObjectDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.SurveillanceObjectDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SurveillanceObjectGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.SurveillanceObjectGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.SurveillanceObjectDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.SurveillanceObjectDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.SurveillanceObjectGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.SurveillanceObjectGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.SurveillanceObjectFindFirstArgs,
      TData = Prisma.SurveillanceObjectGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.SurveillanceObjectFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.SurveillanceObjectGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.SurveillanceObjectFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.SurveillanceObjectFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.SurveillanceObjectGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.SurveillanceObjectGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.SurveillanceObjectFindManyArgs,
      TData = Array<Prisma.SurveillanceObjectGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.SurveillanceObjectFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.SurveillanceObjectGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.SurveillanceObjectFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.SurveillanceObjectFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.SurveillanceObjectGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.SurveillanceObjectGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.SurveillanceObjectFindUniqueArgs,
      TData = Prisma.SurveillanceObjectGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.SurveillanceObjectFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.SurveillanceObjectGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.SurveillanceObjectFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.SurveillanceObjectFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.SurveillanceObjectGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.SurveillanceObjectGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.SurveillanceObjectUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.SurveillanceObjectUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.SurveillanceObjectUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.SurveillanceObjectUpdateManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  update: {
    useMutation: <T extends Prisma.SurveillanceObjectUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.SurveillanceObjectUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SurveillanceObjectGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.SurveillanceObjectGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.SurveillanceObjectUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.SurveillanceObjectUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.SurveillanceObjectGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.SurveillanceObjectGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.SurveillanceObjectCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.SurveillanceObjectCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.SurveillanceObjectCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.SurveillanceObjectCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.SurveillanceObjectCountArgs>(
      input?: Omit<
        Prisma.Subset<T, Prisma.SurveillanceObjectCountArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.SurveillanceObjectCountAggregateOutputType
              >
          : number,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.SurveillanceObjectCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
