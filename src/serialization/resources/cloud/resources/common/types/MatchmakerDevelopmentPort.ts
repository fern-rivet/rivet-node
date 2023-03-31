/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const MatchmakerDevelopmentPort: core.serialization.ObjectSchema<
    serializers.cloud.MatchmakerDevelopmentPort.Raw,
    Rivet.cloud.MatchmakerDevelopmentPort
> = core.serialization.object({
    port: core.serialization.number().optional(),
    portRange: core.serialization.property(
        "port_range",
        core.serialization
            .lazyObject(async () => (await import("../../../../..")).cloud.version.matchmaker.PortRange)
            .optional()
    ),
    protocol: core.serialization.lazy(
        async () => (await import("../../../../..")).cloud.version.matchmaker.PortProtocol
    ),
});

export declare namespace MatchmakerDevelopmentPort {
    interface Raw {
        port?: number | null;
        port_range?: serializers.cloud.version.matchmaker.PortRange.Raw | null;
        protocol: serializers.cloud.version.matchmaker.PortProtocol.Raw;
    }
}