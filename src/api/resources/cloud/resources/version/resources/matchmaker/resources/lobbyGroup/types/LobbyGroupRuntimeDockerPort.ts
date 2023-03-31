/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

/**
 * **Deprecated: use GameMode instead**
 * A docker port.
 */
export interface LobbyGroupRuntimeDockerPort {
    /** The label of this docker port. */
    label: string;
    /** The port number to connect to. */
    targetPort?: number;
    portRange?: Rivet.cloud.version.matchmaker.PortRange;
    proxyProtocol: Rivet.cloud.version.matchmaker.PortProtocol;
}
