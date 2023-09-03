/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Rivet from "../../../../..";

/**
 * Cloud configuration for a given version.
 */
export interface Config {
    engine?: Rivet.cloud.version.engine.Config;
    cdn?: Rivet.cloud.version.cdn.Config;
    matchmaker?: Rivet.cloud.version.matchmaker.Config;
    kv?: Rivet.cloud.version.kv.Config;
    identity?: Rivet.cloud.version.identity.Config;
}
