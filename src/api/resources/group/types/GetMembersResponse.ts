/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface GetMembersResponse {
    /** A list of group members. */
    members: Rivet.group.Member[];
    /** The pagination anchor. */
    anchor?: string;
    watch: Rivet.WatchResponse;
}