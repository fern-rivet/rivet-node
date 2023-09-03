/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../../../core";

export const GetAnalyticsMatchmakerLiveResponse: core.serialization.ObjectSchema<
    serializers.cloud.games.namespaces.GetAnalyticsMatchmakerLiveResponse.Raw,
    Rivet.cloud.games.namespaces.GetAnalyticsMatchmakerLiveResponse
> = core.serialization.object({
    lobbies: core.serialization.list(
        core.serialization.lazyObject(
            async () => (await import("../../../../../../../../..")).cloud.LobbySummaryAnalytics
        )
    ),
});

export declare namespace GetAnalyticsMatchmakerLiveResponse {
    interface Raw {
        lobbies: serializers.cloud.LobbySummaryAnalytics.Raw[];
    }
}