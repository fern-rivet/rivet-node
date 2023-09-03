/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../../..";
import * as Rivet from "../../../../../../../../../../api";
import * as core from "../../../../../../../../../../core";

export const GameModeJoinConfig: core.serialization.ObjectSchema<
    serializers.cloud.version.matchmaker.GameModeJoinConfig.Raw,
    Rivet.cloud.version.matchmaker.GameModeJoinConfig
> = core.serialization.object({
    enabled: core.serialization.boolean(),
    identityRequirement: core.serialization.property(
        "identity_requirement",
        core.serialization.lazy(
            async () =>
                (await import("../../../../../../../../..")).cloud.version.matchmaker.GameModeIdentityRequirement
        )
    ),
    verificationConfig: core.serialization.property(
        "verification_config",
        core.serialization
            .lazyObject(
                async () =>
                    (await import("../../../../../../../../..")).cloud.version.matchmaker.GameModeVerificationConfig
            )
            .optional()
    ),
});

export declare namespace GameModeJoinConfig {
    interface Raw {
        enabled: boolean;
        identity_requirement: serializers.cloud.version.matchmaker.GameModeIdentityRequirement.Raw;
        verification_config?: serializers.cloud.version.matchmaker.GameModeVerificationConfig.Raw | null;
    }
}
