/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createUserRouter from "./User.router";
import createDepartmentRouter from "./Department.router";
import createRoleDataRouter from "./RoleData.router";
import createPermissionRouter from "./Permission.router";
import createIncidentTypeRouter from "./IncidentType.router";
import createIncidentGroupRouter from "./IncidentGroup.router";
import createCameraRouter from "./Camera.router";
import createSurveillanceObjectRouter from "./SurveillanceObject.router";
import createUserRoleRouter from "./UserRole.router";
import createIncidentRouter from "./Incident.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as DepartmentClientType } from "./Department.router";
import { ClientType as RoleDataClientType } from "./RoleData.router";
import { ClientType as PermissionClientType } from "./Permission.router";
import { ClientType as IncidentTypeClientType } from "./IncidentType.router";
import { ClientType as IncidentGroupClientType } from "./IncidentGroup.router";
import { ClientType as CameraClientType } from "./Camera.router";
import { ClientType as SurveillanceObjectClientType } from "./SurveillanceObject.router";
import { ClientType as UserRoleClientType } from "./UserRole.router";
import { ClientType as IncidentClientType } from "./Incident.router";

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
        user: createUserRouter(router, procedure),
        department: createDepartmentRouter(router, procedure),
        roleData: createRoleDataRouter(router, procedure),
        permission: createPermissionRouter(router, procedure),
        incidentType: createIncidentTypeRouter(router, procedure),
        incidentGroup: createIncidentGroupRouter(router, procedure),
        camera: createCameraRouter(router, procedure),
        surveillanceObject: createSurveillanceObjectRouter(router, procedure),
        userRole: createUserRoleRouter(router, procedure),
        incident: createIncidentRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    department: DepartmentClientType<AppRouter>;
    roleData: RoleDataClientType<AppRouter>;
    permission: PermissionClientType<AppRouter>;
    incidentType: IncidentTypeClientType<AppRouter>;
    incidentGroup: IncidentGroupClientType<AppRouter>;
    camera: CameraClientType<AppRouter>;
    surveillanceObject: SurveillanceObjectClientType<AppRouter>;
    userRole: UserRoleClientType<AppRouter>;
    incident: IncidentClientType<AppRouter>;
}
