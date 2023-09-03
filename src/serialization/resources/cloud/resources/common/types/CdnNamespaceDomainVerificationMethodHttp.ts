/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const CdnNamespaceDomainVerificationMethodHttp: core.serialization.ObjectSchema<
    serializers.cloud.CdnNamespaceDomainVerificationMethodHttp.Raw,
    Rivet.cloud.CdnNamespaceDomainVerificationMethodHttp
> = core.serialization.object({
    cnameRecord: core.serialization.property("cname_record", core.serialization.string()),
});

export declare namespace CdnNamespaceDomainVerificationMethodHttp {
    interface Raw {
        cname_record: string;
    }
}
