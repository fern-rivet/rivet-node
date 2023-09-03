/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import * as Rivet from "../../..";

export class UnauthorizedError extends errors.RivetError {
    constructor(body: Rivet.ErrorBody) {
        super({
            statusCode: 408,
            body: body,
        });
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
