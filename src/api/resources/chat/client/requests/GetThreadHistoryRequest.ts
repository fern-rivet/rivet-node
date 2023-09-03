/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Rivet from "../../../..";

export interface GetThreadHistoryRequest {
    /**
     * RFC3339 timestamp.
     */
    ts?: Date;
    /**
     * How many messages to collect in each direction. If querying `rivet.api.chat.common#QueryDirection$before_and_after`, `rivet.api.chat.common#QueryDirection$chat_messages` will be `count * 2`.
     */
    count: number;
    /**
     * Represents which direction to query messages from relative to the given timestamp.
     */
    queryDirection?: Rivet.chat.QueryDirection;
}
