/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const ValidateGameNamespaceTokenDevelopmentRequest: core.serialization.ObjectSchema<
    serializers.cloud.games.namespaces.ValidateGameNamespaceTokenDevelopmentRequest.Raw,
    Rivet.cloud.games.namespaces.ValidateGameNamespaceTokenDevelopmentRequest
> = core.serialization.object({
    hostname: core.serialization.string(),
    lobbyPorts: core.serialization.property(
        "lobby_ports",
        core.serialization.list(
            core.serialization.lazyObject(
                async () => (await import("../../../../../../..")).cloud.version.matchmaker.LobbyGroupRuntimeDockerPort
            )
        )
    ),
});

export declare namespace ValidateGameNamespaceTokenDevelopmentRequest {
    interface Raw {
        hostname: string;
        lobby_ports: serializers.cloud.version.matchmaker.LobbyGroupRuntimeDockerPort.Raw[];
    }
}
