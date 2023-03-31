/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const GroupBillingPayment: core.serialization.ObjectSchema<
    serializers.cloud.GroupBillingPayment.Raw,
    Rivet.cloud.GroupBillingPayment
> = core.serialization.object({
    amount: core.serialization.number(),
    description: core.serialization.string().optional(),
    fromInvoice: core.serialization.property("from_invoice", core.serialization.boolean()),
    createdTs: core.serialization.property("created_ts", core.serialization.date()),
    status: core.serialization.lazy(async () => (await import("../../../../..")).cloud.GroupBillingStatus),
});

export declare namespace GroupBillingPayment {
    interface Raw {
        amount: number;
        description?: string | null;
        from_invoice: boolean;
        created_ts: string;
        status: serializers.cloud.GroupBillingStatus.Raw;
    }
}