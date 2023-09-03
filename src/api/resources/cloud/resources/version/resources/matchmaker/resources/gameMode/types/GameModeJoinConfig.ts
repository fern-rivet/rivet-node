/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Rivet from "../../../../../../../../..";

/**
 * Configures the requirements and authentication for the /join endpoint. If this value is not set in the config, the /join endpoint is still enabled.
 */
export interface GameModeJoinConfig {
    /** Sets whether or not the /join endpoint is enabled. */
    enabled: boolean;
    identityRequirement: Rivet.cloud.version.matchmaker.GameModeIdentityRequirement;
    verificationConfig?: Rivet.cloud.version.matchmaker.GameModeVerificationConfig;
}
