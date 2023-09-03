/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../core";

export const ValidateProfileRequest: core.serialization.Schema<
    serializers.identity.ValidateProfileRequest.Raw,
    Rivet.identity.ValidateProfileRequest
> = core.serialization.object({
    displayName: core.serialization.property(
        "display_name",
        core.serialization.lazy(async () => (await import("../../../..")).DisplayName).optional()
    ),
    accountNumber: core.serialization.property(
        "account_number",
        core.serialization.lazy(async () => (await import("../../../..")).AccountNumber).optional()
    ),
    bio: core.serialization.lazy(async () => (await import("../../../..")).Bio).optional(),
});

export declare namespace ValidateProfileRequest {
    interface Raw {
        display_name?: serializers.DisplayName.Raw | null;
        account_number?: serializers.AccountNumber.Raw | null;
        bio?: serializers.Bio.Raw | null;
    }
}
