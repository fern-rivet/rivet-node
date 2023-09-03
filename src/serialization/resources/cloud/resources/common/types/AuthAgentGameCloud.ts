/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const AuthAgentGameCloud: core.serialization.ObjectSchema<
    serializers.cloud.AuthAgentGameCloud.Raw,
    Rivet.cloud.AuthAgentGameCloud
> = core.serialization.object({
    gameId: core.serialization.property("game_id", core.serialization.string()),
});

export declare namespace AuthAgentGameCloud {
    interface Raw {
        game_id: string;
    }
}
