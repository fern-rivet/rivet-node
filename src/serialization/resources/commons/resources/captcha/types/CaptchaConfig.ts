/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const CaptchaConfig: core.serialization.Schema<
    serializers.commons.CaptchaConfig.Raw,
    RivetApi.commons.CaptchaConfig
> = core.serialization
    .union("type", {
        hcaptcha: core.serialization.lazyObject(
            async () => (await import("../../../../..")).commons.CaptchaConfigHcaptcha
        ),
    })
    .transform<RivetApi.commons.CaptchaConfig>({
        parse: (value) => {
            switch (value.type) {
                case "hcaptcha":
                    return RivetApi.commons.CaptchaConfig.hcaptcha(value);
                default:
                    return RivetApi.commons.CaptchaConfig._unknown(value);
            }
        },
        json: (value) => value as any,
    });

export declare namespace CaptchaConfig {
    type Raw = CaptchaConfig.Hcaptcha;

    interface Hcaptcha extends serializers.commons.CaptchaConfigHcaptcha.Raw {
        type: "hcaptcha";
    }
}