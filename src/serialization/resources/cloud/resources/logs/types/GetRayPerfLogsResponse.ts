/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";

export const GetRayPerfLogsResponse: core.serialization.ObjectSchema<
    serializers.cloud.GetRayPerfLogsResponse.Raw,
    Rivet.cloud.GetRayPerfLogsResponse
> = core.serialization.object({
    perfLists: core.serialization.property(
        "perf_lists",
        core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../../../..")).cloud.SvcPerf)
        )
    ),
});

export declare namespace GetRayPerfLogsResponse {
    interface Raw {
        perf_lists: serializers.cloud.SvcPerf.Raw[];
    }
}
