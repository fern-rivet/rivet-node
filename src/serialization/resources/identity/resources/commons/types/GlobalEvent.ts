/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const GlobalEvent: core.schemas.ObjectSchema<
  serializers.identity.GlobalEvent.Raw,
  RivetApi.identity.GlobalEvent
> = core.schemas.object({
  ts: core.schemas.lazy(async () => (await import("../../../../..")).commons.Timestamp),
  kind: core.schemas.lazy(async () => (await import("../../../../..")).identity.GlobalEventKind),
  notification: core.schemas.lazyObject(async () => (await import("../../../../..")).identity.GlobalEventNotification),
});

export declare namespace GlobalEvent {
  interface Raw {
    ts: serializers.commons.Timestamp.Raw;
    kind: serializers.identity.GlobalEventKind.Raw;
    notification: serializers.identity.GlobalEventNotification.Raw;
  }
}
