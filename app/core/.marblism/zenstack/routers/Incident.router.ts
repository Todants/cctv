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
      .input($Schema.IncidentInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).incident.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.IncidentInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).incident.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.IncidentInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).incident.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.IncidentInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).incident.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.IncidentInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).incident.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.IncidentInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).incident.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.IncidentInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).incident.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.IncidentInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).incident.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.IncidentInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).incident.update(input as any)),
      ),

    count: procedure
      .input($Schema.IncidentInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).incident.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.IncidentCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.IncidentCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.IncidentCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.IncidentCreateManyArgs>(
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
    useMutation: <T extends Prisma.IncidentCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.IncidentCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.IncidentGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.IncidentGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.IncidentCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.IncidentCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.IncidentGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.IncidentGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.IncidentDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.IncidentDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.IncidentDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.IncidentDeleteManyArgs>(
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
    useMutation: <T extends Prisma.IncidentDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.IncidentDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.IncidentGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.IncidentGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.IncidentDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.IncidentDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.IncidentGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.IncidentGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.IncidentFindFirstArgs,
      TData = Prisma.IncidentGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.IncidentFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.IncidentGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.IncidentFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.IncidentFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.IncidentGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.IncidentGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.IncidentFindManyArgs,
      TData = Array<Prisma.IncidentGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.IncidentFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.IncidentGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.IncidentFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.IncidentFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.IncidentGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.IncidentGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.IncidentFindUniqueArgs,
      TData = Prisma.IncidentGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.IncidentFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.IncidentGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.IncidentFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.IncidentFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.IncidentGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.IncidentGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.IncidentUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.IncidentUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.IncidentUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.IncidentUpdateManyArgs>(
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
    useMutation: <T extends Prisma.IncidentUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.IncidentUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.IncidentGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.IncidentGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.IncidentUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.IncidentUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.IncidentGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.IncidentGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.IncidentCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.IncidentCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.IncidentCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.IncidentCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.IncidentCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.IncidentCountArgs>, 'cursor'>,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.IncidentCountAggregateOutputType
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
              Prisma.IncidentCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
