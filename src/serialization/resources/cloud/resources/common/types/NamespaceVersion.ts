/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const NamespaceVersion: core.serialization.ObjectSchema<
    serializers.cloud.NamespaceVersion.Raw,
    Rivet.cloud.NamespaceVersion
> = core.serialization.object({
    namespaceId: core.serialization.property("namespace_id", core.serialization.string()),
    versionId: core.serialization.property("version_id", core.serialization.string()),
    deployTs: core.serialization.property("deploy_ts", core.serialization.date()),
});

export declare namespace NamespaceVersion {
    interface Raw {
        namespace_id: string;
        version_id: string;
        deploy_ts: string;
    }
}
