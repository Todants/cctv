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
      .input($Schema.PermissionInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).permission.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.PermissionInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).permission.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.PermissionInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).permission.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.PermissionInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).permission.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.PermissionInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).permission.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.PermissionInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).permission.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.PermissionInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).permission.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.PermissionInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).permission.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.PermissionInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).permission.update(input as any)),
      ),

    count: procedure
      .input($Schema.PermissionInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).permission.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.PermissionCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PermissionCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PermissionCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.PermissionCreateManyArgs>(
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
    useMutation: <T extends Prisma.PermissionCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PermissionCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.PermissionGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.PermissionGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PermissionCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.PermissionCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.PermissionGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.PermissionGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.PermissionDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PermissionDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PermissionDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.PermissionDeleteManyArgs>(
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
    useMutation: <T extends Prisma.PermissionDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PermissionDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.PermissionGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.PermissionGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PermissionDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.PermissionDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.PermissionGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.PermissionGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.PermissionFindFirstArgs,
      TData = Prisma.PermissionGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.PermissionFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.PermissionGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.PermissionFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.PermissionFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.PermissionGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.PermissionGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.PermissionFindManyArgs,
      TData = Array<Prisma.PermissionGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.PermissionFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.PermissionGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.PermissionFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.PermissionFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.PermissionGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.PermissionGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.PermissionFindUniqueArgs,
      TData = Prisma.PermissionGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.PermissionFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.PermissionGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.PermissionFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.PermissionFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.PermissionGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.PermissionGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.PermissionUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PermissionUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PermissionUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.PermissionUpdateManyArgs>(
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
    useMutation: <T extends Prisma.PermissionUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PermissionUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.PermissionGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.PermissionGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PermissionUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.PermissionUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.PermissionGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.PermissionGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.PermissionCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.PermissionCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.PermissionCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.PermissionCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.PermissionCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.PermissionCountArgs>, 'cursor'>,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.PermissionCountAggregateOutputType
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
              Prisma.PermissionCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
