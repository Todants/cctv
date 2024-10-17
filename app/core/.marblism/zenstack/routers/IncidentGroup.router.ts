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
      .input($Schema.IncidentGroupInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).incidentGroup.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.IncidentGroupInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).incidentGroup.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.IncidentGroupInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).incidentGroup.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.IncidentGroupInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).incidentGroup.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.IncidentGroupInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).incidentGroup.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.IncidentGroupInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).incidentGroup.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.IncidentGroupInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).incidentGroup.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.IncidentGroupInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).incidentGroup.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.IncidentGroupInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).incidentGroup.update(input as any)),
      ),

    count: procedure
      .input($Schema.IncidentGroupInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).incidentGroup.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.IncidentGroupCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.IncidentGroupCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.IncidentGroupCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.IncidentGroupCreateManyArgs>(
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
    useMutation: <T extends Prisma.IncidentGroupCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.IncidentGroupCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.IncidentGroupGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.IncidentGroupGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.IncidentGroupCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.IncidentGroupCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.IncidentGroupGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.IncidentGroupGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.IncidentGroupDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.IncidentGroupDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.IncidentGroupDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.IncidentGroupDeleteManyArgs>(
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
    useMutation: <T extends Prisma.IncidentGroupDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.IncidentGroupDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.IncidentGroupGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.IncidentGroupGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.IncidentGroupDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.IncidentGroupDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.IncidentGroupGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.IncidentGroupGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.IncidentGroupFindFirstArgs,
      TData = Prisma.IncidentGroupGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.IncidentGroupFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.IncidentGroupGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.IncidentGroupFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.IncidentGroupFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.IncidentGroupGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.IncidentGroupGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.IncidentGroupFindManyArgs,
      TData = Array<Prisma.IncidentGroupGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.IncidentGroupFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.IncidentGroupGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.IncidentGroupFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.IncidentGroupFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.IncidentGroupGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.IncidentGroupGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.IncidentGroupFindUniqueArgs,
      TData = Prisma.IncidentGroupGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.IncidentGroupFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.IncidentGroupGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.IncidentGroupFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.IncidentGroupFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.IncidentGroupGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.IncidentGroupGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.IncidentGroupUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.IncidentGroupUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.IncidentGroupUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.IncidentGroupUpdateManyArgs>(
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
    useMutation: <T extends Prisma.IncidentGroupUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.IncidentGroupUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.IncidentGroupGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.IncidentGroupGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.IncidentGroupUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.IncidentGroupUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.IncidentGroupGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.IncidentGroupGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.IncidentGroupCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.IncidentGroupCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.IncidentGroupCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.IncidentGroupCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.IncidentGroupCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.IncidentGroupCountArgs>, 'cursor'>,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.IncidentGroupCountAggregateOutputType
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
              Prisma.IncidentGroupCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
