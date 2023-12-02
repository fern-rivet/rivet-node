/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../core";

export const LoginResponse: core.serialization.ObjectSchema<
    serializers.admin.LoginResponse.Raw,
    Rivet.admin.LoginResponse
> = core.serialization.object({
    url: core.serialization.string(),
});

export declare namespace LoginResponse {
    interface Raw {
        url: string;
    }
}