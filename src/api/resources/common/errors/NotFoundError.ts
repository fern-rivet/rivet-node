/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import { Rivet } from "@rivet-gg/api";

export class NotFoundError extends errors.RivetError {
    constructor(body: Rivet.ErrorBody) {
        super({
            message: "NotFoundError",
            statusCode: 404,
            body: body,
        });
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}