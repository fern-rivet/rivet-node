/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../../..";
import * as Rivet from "../../../../../../../../../../api";
import * as core from "../../../../../../../../../../core";

export const NetworkMode: core.serialization.Schema<
    serializers.cloud.version.matchmaker.NetworkMode.Raw,
    Rivet.cloud.version.matchmaker.NetworkMode
> = core.serialization.enum_(["bridge", "host"]);

export declare namespace NetworkMode {
    type Raw = "bridge" | "host";
}
