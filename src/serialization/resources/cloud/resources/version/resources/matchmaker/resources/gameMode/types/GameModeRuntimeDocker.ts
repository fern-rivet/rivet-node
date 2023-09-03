/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../../..";
import * as Rivet from "../../../../../../../../../../api";
import * as core from "../../../../../../../../../../core";

export const GameModeRuntimeDocker: core.serialization.ObjectSchema<
    serializers.cloud.version.matchmaker.GameModeRuntimeDocker.Raw,
    Rivet.cloud.version.matchmaker.GameModeRuntimeDocker
> = core.serialization.object({
    dockerfile: core.serialization.string().optional(),
    image: core.serialization.string().optional(),
    imageId: core.serialization.property("image_id", core.serialization.string().optional()),
    args: core.serialization.list(core.serialization.string()).optional(),
    env: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
    networkMode: core.serialization.property(
        "network_mode",
        core.serialization
            .lazy(async () => (await import("../../../../../../../../..")).cloud.version.matchmaker.NetworkMode)
            .optional()
    ),
    ports: core.serialization
        .record(
            core.serialization.string(),
            core.serialization.lazyObject(
                async () =>
                    (await import("../../../../../../../../..")).cloud.version.matchmaker.GameModeRuntimeDockerPort
            )
        )
        .optional(),
});

export declare namespace GameModeRuntimeDocker {
    interface Raw {
        dockerfile?: string | null;
        image?: string | null;
        image_id?: string | null;
        args?: string[] | null;
        env?: Record<string, string> | null;
        network_mode?: serializers.cloud.version.matchmaker.NetworkMode.Raw | null;
        ports?: Record<string, serializers.cloud.version.matchmaker.GameModeRuntimeDockerPort.Raw> | null;
    }
}
