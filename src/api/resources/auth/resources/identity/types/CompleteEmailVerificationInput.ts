/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CompleteEmailVerificationInput {
    /** A universally unique identifier. */
    verificationId: string;
    /** The code sent to the requestee's email. */
    code: string;
}