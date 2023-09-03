/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

/**
 * Configures the requirements and authentication for the /create endpoint. If this value is not set in the config, the /create endpoint is NOT enabled.
 */
export interface GameModeCreateConfig {
    identityRequirement: Rivet.cloud.version.matchmaker.GameModeIdentityRequirement;
    verificationConfig?: Rivet.cloud.version.matchmaker.GameModeVerificationConfig;
    enablePublic: boolean;
    enablePrivate: boolean;
    maxLobbiesPerIdentity?: number;
}