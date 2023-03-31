/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../core";

export const PutRequest: core.serialization.ObjectSchema<serializers.kv.PutRequest.Raw, Rivet.kv.PutRequest> =
    core.serialization.object({
        namespaceId: core.serialization.property("namespace_id", core.serialization.string().optional()),
        key: core.serialization.string(),
    });

export declare namespace PutRequest {
    interface Raw {
        namespace_id?: string | null;
        key: string;
    }
}