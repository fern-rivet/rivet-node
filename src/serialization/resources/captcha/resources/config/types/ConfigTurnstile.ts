/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";

export const ConfigTurnstile: core.serialization.ObjectSchema<
    serializers.captcha.ConfigTurnstile.Raw,
    Rivet.captcha.ConfigTurnstile
> = core.serialization.object({
    clientResponse: core.serialization.property("client_response", core.serialization.string()),
});

export declare namespace ConfigTurnstile {
    interface Raw {
        client_response: string;
    }
}
