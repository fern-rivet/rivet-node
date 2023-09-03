/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

/**
 * CDN configuration for a given namespace.
 */
export interface CdnNamespaceConfig {
    /** Whether or not to allow users to connect to the given namespace via domain name. */
    enableDomainPublicAuth: boolean;
    /** A list of CDN domains for a given namespace. */
    domains: Rivet.cloud.CdnNamespaceDomain[];
    authType: Rivet.cloud.CdnAuthType;
    /** A list of CDN authenticated users for a given namespace. */
    authUserList: Rivet.cloud.CdnNamespaceAuthUser[];
}
