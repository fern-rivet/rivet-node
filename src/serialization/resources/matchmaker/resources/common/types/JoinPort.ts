/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";

export const JoinPort: core.serialization.ObjectSchema<serializers.matchmaker.JoinPort.Raw, Rivet.matchmaker.JoinPort> =
    core.serialization.object({
        host: core.serialization.string().optional(),
        hostname: core.serialization.string(),
        port: core.serialization.number().optional(),
        portRange: core.serialization.property(
            "port_range",
            core.serialization
                .lazyObject(async () => (await import("../../../../..")).matchmaker.JoinPortRange)
                .optional()
        ),
        isTls: core.serialization.property("is_tls", core.serialization.boolean()),
    });

export declare namespace JoinPort {
    interface Raw {
        host?: string | null;
        hostname: string;
        port?: number | null;
        port_range?: serializers.matchmaker.JoinPortRange.Raw | null;
        is_tls: boolean;
    }
}
