/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const JoinRegion: core.serialization.ObjectSchema<
    serializers.matchmaker.JoinRegion.Raw,
    Rivet.matchmaker.JoinRegion
> = core.serialization.object({
    regionId: core.serialization.property(
        "region_id",
        core.serialization.lazy(async () => (await import("../../../../..")).Identifier)
    ),
    displayName: core.serialization.property(
        "display_name",
        core.serialization.lazy(async () => (await import("../../../../..")).DisplayName)
    ),
});

export declare namespace JoinRegion {
    interface Raw {
        region_id: serializers.Identifier.Raw;
        display_name: serializers.DisplayName.Raw;
    }
}