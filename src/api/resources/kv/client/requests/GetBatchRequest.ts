/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface GetBatchRequest {
    keys: Rivet.kv.Key | Rivet.kv.Key[];
    /**
     * A query parameter denoting the requests watch index.
     */
    watchIndex?: string;
    namespaceId?: string;
}
