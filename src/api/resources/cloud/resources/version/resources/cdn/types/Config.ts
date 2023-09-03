/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Rivet from "../../../../../../..";

/**
 * CDN configuration for a given version.
 */
export interface Config {
    /** _Configures Rivet CLI behavior. Has no effect on server behavior._ */
    buildCommand?: string;
    /** _Configures Rivet CLI behavior. Has no effect on server behavior._ */
    buildOutput?: string;
    siteId?: string;
    /** Multiple CDN version routes. */
    routes?: Rivet.cloud.version.cdn.Route[];
}
