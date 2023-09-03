/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface GetJoinRequestsResponse {
    /** A list of group join requests. */
    joinRequests: Rivet.group.JoinRequest[];
    /** The pagination anchor. */
    anchor?: string;
    watch: Rivet.WatchResponse;
}
