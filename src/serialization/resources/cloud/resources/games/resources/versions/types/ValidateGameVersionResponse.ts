/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const ValidateGameVersionResponse: core.serialization.ObjectSchema<
    serializers.cloud.games.ValidateGameVersionResponse.Raw,
    Rivet.cloud.games.ValidateGameVersionResponse
> = core.serialization.object({
    errors: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../../../..")).ValidationError)
    ),
});

export declare namespace ValidateGameVersionResponse {
    interface Raw {
        errors: serializers.ValidationError.Raw[];
    }
}
