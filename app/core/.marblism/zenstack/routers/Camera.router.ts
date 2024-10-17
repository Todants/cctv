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
      .input($Schema.CameraInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).camera.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.CameraInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).camera.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.CameraInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).camera.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.CameraInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).camera.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.CameraInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).camera.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.CameraInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).camera.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.CameraInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).camera.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.CameraInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).camera.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.CameraInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).camera.update(input as any)),
      ),

    count: procedure
      .input($Schema.CameraInputSchema.count.optional())
      .query(({ ctx, input }) => checkRead(db(ctx).camera.count(input as any))),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.CameraCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CameraCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CameraCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CameraCreateManyArgs>(
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
    useMutation: <T extends Prisma.CameraCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CameraCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.CameraGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.CameraGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CameraCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CameraCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.CameraGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.CameraGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.CameraDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CameraDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CameraDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CameraDeleteManyArgs>(
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
    useMutation: <T extends Prisma.CameraDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CameraDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.CameraGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.CameraGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CameraDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CameraDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.CameraGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.CameraGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.CameraFindFirstArgs,
      TData = Prisma.CameraGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.CameraFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.CameraGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.CameraFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.CameraFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.CameraGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.CameraGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.CameraFindManyArgs,
      TData = Array<Prisma.CameraGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.CameraFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.CameraGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.CameraFindManyArgs>(
      input?: Omit<Prisma.SelectSubset<T, Prisma.CameraFindManyArgs>, 'cursor'>,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.CameraGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.CameraGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.CameraFindUniqueArgs,
      TData = Prisma.CameraGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.CameraFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.CameraGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.CameraFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.CameraFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.CameraGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.CameraGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.CameraUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CameraUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CameraUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CameraUpdateManyArgs>(
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
    useMutation: <T extends Prisma.CameraUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CameraUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.CameraGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.CameraGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CameraUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CameraUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.CameraGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.CameraGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.CameraCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.CameraCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.CameraCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.CameraCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.CameraCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.CameraCountArgs>, 'cursor'>,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.CameraCountAggregateOutputType
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
              Prisma.CameraCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
