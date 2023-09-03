/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../core";

export const GetMembersResponse: core.serialization.ObjectSchema<
    serializers.group.GetMembersResponse.Raw,
    Rivet.group.GetMembersResponse
> = core.serialization.object({
    members: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).group.Member)
    ),
    anchor: core.serialization.string().optional(),
    watch: core.serialization.lazyObject(async () => (await import("../../..")).WatchResponse),
});

export declare namespace GetMembersResponse {
    interface Raw {
        members: serializers.group.Member.Raw[];
        anchor?: string | null;
        watch: serializers.WatchResponse.Raw;
    }
}
