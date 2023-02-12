/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The state of the given identity's developer status.
 */
export type DevState = "inactive" | "pending" | "accepted";

export const DevState = {
    Inactive: "inactive",
    Pending: "pending",
    Accepted: "accepted",
} as const;