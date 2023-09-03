/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const Config: core.serialization.ObjectSchema<serializers.cloud.version.Config.Raw, Rivet.cloud.version.Config> =
    core.serialization.object({
        engine: core.serialization
            .lazyObject(async () => (await import("../../../../..")).cloud.version.engine.Config)
            .optional(),
        cdn: core.serialization
            .lazyObject(async () => (await import("../../../../..")).cloud.version.cdn.Config)
            .optional(),
        matchmaker: core.serialization
            .lazyObject(async () => (await import("../../../../..")).cloud.version.matchmaker.Config)
            .optional(),
        kv: core.serialization
            .lazyObject(async () => (await import("../../../../..")).cloud.version.kv.Config)
            .optional(),
        identity: core.serialization
            .lazyObject(async () => (await import("../../../../..")).cloud.version.identity.Config)
            .optional(),
    });

export declare namespace Config {
    interface Raw {
        engine?: serializers.cloud.version.engine.Config.Raw | null;
        cdn?: serializers.cloud.version.cdn.Config.Raw | null;
        matchmaker?: serializers.cloud.version.matchmaker.Config.Raw | null;
        kv?: serializers.cloud.version.kv.Config.Raw | null;
        identity?: serializers.cloud.version.identity.Config.Raw | null;
    }
}
