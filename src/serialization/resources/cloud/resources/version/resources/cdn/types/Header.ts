/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const Header: core.serialization.ObjectSchema<
    serializers.cloud.version.cdn.Header.Raw,
    Rivet.cloud.version.cdn.Header
> = core.serialization.object({
    name: core.serialization.string(),
    value: core.serialization.string(),
});

export declare namespace Header {
    interface Raw {
        name: string;
        value: string;
    }
}
