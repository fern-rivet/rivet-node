/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../../../core";

export const GetNamespaceLobbyResponse: core.serialization.ObjectSchema<
    serializers.cloud.games.namespaces.GetNamespaceLobbyResponse.Raw,
    Rivet.cloud.games.namespaces.GetNamespaceLobbyResponse
> = core.serialization.object({
    lobby: core.serialization.lazyObject(
        async () => (await import("../../../../../../../../..")).cloud.LogsLobbySummary
    ),
    metrics: core.serialization
        .lazyObject(async () => (await import("../../../../../../../../..")).cloud.SvcMetrics)
        .optional(),
    stdoutPresignedUrls: core.serialization.property(
        "stdout_presigned_urls",
        core.serialization.list(core.serialization.string())
    ),
    stderrPresignedUrls: core.serialization.property(
        "stderr_presigned_urls",
        core.serialization.list(core.serialization.string())
    ),
    perfLists: core.serialization.property(
        "perf_lists",
        core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../../../../../../../..")).cloud.SvcPerf)
        )
    ),
});

export declare namespace GetNamespaceLobbyResponse {
    interface Raw {
        lobby: serializers.cloud.LogsLobbySummary.Raw;
        metrics?: serializers.cloud.SvcMetrics.Raw | null;
        stdout_presigned_urls: string[];
        stderr_presigned_urls: string[];
        perf_lists: serializers.cloud.SvcPerf.Raw[];
    }
}