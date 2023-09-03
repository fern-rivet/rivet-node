/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Rivet from "../../../../../api";
import * as core from "../../../../../core";

export const FindLobbyRequest: core.serialization.Schema<
    serializers.module_.FindLobbyRequest.Raw,
    Omit<Rivet.module_.FindLobbyRequest, "origin">
> = core.serialization.object({
    namespaceId: core.serialization.property("namespace_id", core.serialization.string().optional()),
    data: core.serialization.unknown(),
});

export declare namespace FindLobbyRequest {
    interface Raw {
        namespace_id?: string | null;
        data?: unknown;
    }
}
