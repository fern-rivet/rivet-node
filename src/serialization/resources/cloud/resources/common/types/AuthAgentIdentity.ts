/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const AuthAgentIdentity: core.serialization.ObjectSchema<
    serializers.cloud.AuthAgentIdentity.Raw,
    Rivet.cloud.AuthAgentIdentity
> = core.serialization.object({
    identityId: core.serialization.property("identity_id", core.serialization.string()),
});

export declare namespace AuthAgentIdentity {
    interface Raw {
        identity_id: string;
    }
}
