/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const GroupBillingCheckoutRequest: core.serialization.ObjectSchema<
    serializers.cloud.GroupBillingCheckoutRequest.Raw,
    Rivet.cloud.GroupBillingCheckoutRequest
> = core.serialization.object({
    amount: core.serialization.number().optional(),
});

export declare namespace GroupBillingCheckoutRequest {
    interface Raw {
        amount?: number | null;
    }
}