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
      .input($Schema.IncidentTypeInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).incidentType.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.IncidentTypeInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).incidentType.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.IncidentTypeInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).incidentType.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.IncidentTypeInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).incidentType.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.IncidentTypeInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).incidentType.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.IncidentTypeInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).incidentType.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.IncidentTypeInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).incidentType.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.IncidentTypeInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).incidentType.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.IncidentTypeInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).incidentType.update(input as any)),
      ),

    count: procedure
      .input($Schema.IncidentTypeInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).incidentType.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.IncidentTypeCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.IncidentTypeCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.IncidentTypeCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.IncidentTypeCreateManyArgs>(
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
    useMutation: <T extends Prisma.IncidentTypeCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.IncidentTypeCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.IncidentTypeGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.IncidentTypeGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.IncidentTypeCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.IncidentTypeCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.IncidentTypeGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.IncidentTypeGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.IncidentTypeDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.IncidentTypeDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.IncidentTypeDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.IncidentTypeDeleteManyArgs>(
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
    useMutation: <T extends Prisma.IncidentTypeDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.IncidentTypeDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.IncidentTypeGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.IncidentTypeGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.IncidentTypeDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.IncidentTypeDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.IncidentTypeGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.IncidentTypeGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.IncidentTypeFindFirstArgs,
      TData = Prisma.IncidentTypeGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.IncidentTypeFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.IncidentTypeGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.IncidentTypeFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.IncidentTypeFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.IncidentTypeGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.IncidentTypeGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.IncidentTypeFindManyArgs,
      TData = Array<Prisma.IncidentTypeGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.IncidentTypeFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.IncidentTypeGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.IncidentTypeFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.IncidentTypeFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.IncidentTypeGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.IncidentTypeGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.IncidentTypeFindUniqueArgs,
      TData = Prisma.IncidentTypeGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.IncidentTypeFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.IncidentTypeGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.IncidentTypeFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.IncidentTypeFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.IncidentTypeGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.IncidentTypeGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.IncidentTypeUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.IncidentTypeUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.IncidentTypeUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.IncidentTypeUpdateManyArgs>(
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
    useMutation: <T extends Prisma.IncidentTypeUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.IncidentTypeUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.IncidentTypeGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.IncidentTypeGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.IncidentTypeUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.IncidentTypeUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.IncidentTypeGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.IncidentTypeGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.IncidentTypeCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.IncidentTypeCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.IncidentTypeCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.IncidentTypeCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.IncidentTypeCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.IncidentTypeCountArgs>, 'cursor'>,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.IncidentTypeCountAggregateOutputType
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
              Prisma.IncidentTypeCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
