/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const ChatTopicGroup: core.schemas.ObjectSchema<
  serializers.commons.ChatTopicGroup.Raw,
  RivetApi.commons.ChatTopicGroup
> = core.schemas.object({
  group: core.schemas.lazyObject(async () => (await import("../../../../..")).commons.GroupHandle),
});

export declare namespace ChatTopicGroup {
  interface Raw {
    group: serializers.commons.GroupHandle.Raw;
  }
}
