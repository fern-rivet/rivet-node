/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Rivet from "../../../../../../api";
import * as core from "../../../../../../core";

export const GlobalEventChatRead: core.serialization.ObjectSchema<
    serializers.identity.GlobalEventChatRead.Raw,
    Rivet.identity.GlobalEventChatRead
> = core.serialization.object({
    threadId: core.serialization.property("thread_id", core.serialization.string()),
    readTs: core.serialization.property("read_ts", core.serialization.date()),
});

export declare namespace GlobalEventChatRead {
    interface Raw {
        thread_id: string;
        read_ts: string;
    }
}
