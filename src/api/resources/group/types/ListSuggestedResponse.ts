/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Rivet from "../../..";

export interface ListSuggestedResponse {
    /** A list of group summaries. */
    groups: Rivet.group.Summary[];
    watch: Rivet.WatchResponse;
}
