/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../core";

export const GetProfileResponse: core.serialization.ObjectSchema<
    serializers.group.GetProfileResponse.Raw,
    Rivet.group.GetProfileResponse
> = core.serialization.object({
    group: core.serialization.lazyObject(async () => (await import("../../..")).group.Profile),
    watch: core.serialization.lazyObject(async () => (await import("../../..")).WatchResponse),
});

export declare namespace GetProfileResponse {
    interface Raw {
        group: serializers.group.Profile.Raw;
        watch: serializers.WatchResponse.Raw;
    }
}
