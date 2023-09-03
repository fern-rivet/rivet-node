/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const PrepareDeviceLinkResponse: core.serialization.ObjectSchema<
    serializers.cloud.devices.PrepareDeviceLinkResponse.Raw,
    Rivet.cloud.devices.PrepareDeviceLinkResponse
> = core.serialization.object({
    deviceLinkId: core.serialization.property("device_link_id", core.serialization.string()),
    deviceLinkToken: core.serialization.property("device_link_token", core.serialization.string()),
    deviceLinkUrl: core.serialization.property("device_link_url", core.serialization.string()),
});

export declare namespace PrepareDeviceLinkResponse {
    interface Raw {
        device_link_id: string;
        device_link_token: string;
        device_link_url: string;
    }
}
