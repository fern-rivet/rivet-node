/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const ChatThread: core.schemas.ObjectSchema<serializers.commons.ChatThread.Raw, RivetApi.commons.ChatThread> =
  core.schemas.object({
    threadId: core.schemas.property("thread_id", core.schemas.string()),
    createTs: core.schemas.property(
      "create_ts",
      core.schemas.lazy(async () => (await import("../../../../..")).commons.Timestamp)
    ),
    topic: core.schemas.lazy(async () => (await import("../../../../..")).commons.ChatTopic),
    tailMessage: core.schemas.property(
      "tail_message",
      core.schemas.lazyObject(async () => (await import("../../../../..")).commons.ChatMessage).optional()
    ),
    lastReadTs: core.schemas.property(
      "last_read_ts",
      core.schemas.lazy(async () => (await import("../../../../..")).commons.Timestamp)
    ),
    unreadCount: core.schemas.property("unread_count", core.schemas.number()),
    external: core.schemas.lazyObject(async () => (await import("../../../../..")).commons.ChatThreadExternalLinks),
  });

export declare namespace ChatThread {
  interface Raw {
    thread_id: string;
    create_ts: serializers.commons.Timestamp.Raw;
    topic: serializers.commons.ChatTopic.Raw;
    tail_message?: serializers.commons.ChatMessage.Raw | null;
    last_read_ts: serializers.commons.Timestamp.Raw;
    unread_count: number;
    external: serializers.commons.ChatThreadExternalLinks.Raw;
  }
}
