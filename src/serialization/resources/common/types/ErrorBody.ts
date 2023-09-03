/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../core";

export const ErrorBody: core.serialization.ObjectSchema<serializers.ErrorBody.Raw, Rivet.ErrorBody> =
    core.serialization.object({
        code: core.serialization.string(),
        message: core.serialization.string(),
        documentation: core.serialization.string().optional(),
        metadata: core.serialization.lazy(async () => (await import("../../..")).ErrorMetadata).optional(),
    });

export declare namespace ErrorBody {
    interface Raw {
        code: string;
        message: string;
        documentation?: string | null;
        metadata?: (serializers.ErrorMetadata.Raw | undefined) | null;
    }
}
