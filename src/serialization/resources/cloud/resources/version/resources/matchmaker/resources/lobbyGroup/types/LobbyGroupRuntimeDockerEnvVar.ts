/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../../../core";

export const LobbyGroupRuntimeDockerEnvVar: core.serialization.ObjectSchema<
    serializers.cloud.version.matchmaker.LobbyGroupRuntimeDockerEnvVar.Raw,
    Rivet.cloud.version.matchmaker.LobbyGroupRuntimeDockerEnvVar
> = core.serialization.object({
    key: core.serialization.string(),
    value: core.serialization.string(),
});

export declare namespace LobbyGroupRuntimeDockerEnvVar {
    interface Raw {
        key: string;
        value: string;
    }
}
