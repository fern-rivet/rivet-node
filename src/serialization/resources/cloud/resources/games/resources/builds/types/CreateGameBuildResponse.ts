/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const CreateGameBuildResponse: core.serialization.ObjectSchema<
    serializers.cloud.games.CreateGameBuildResponse.Raw,
    Rivet.cloud.games.CreateGameBuildResponse
> = core.serialization.object({
    buildId: core.serialization.property("build_id", core.serialization.string()),
    uploadId: core.serialization.property("upload_id", core.serialization.string()),
    imagePresignedRequest: core.serialization.property(
        "image_presigned_request",
        core.serialization
            .lazyObject(async () => (await import("../../../../../../..")).upload.PresignedRequest)
            .optional()
    ),
    imagePresignedRequests: core.serialization.property(
        "image_presigned_requests",
        core.serialization
            .list(
                core.serialization.lazyObject(
                    async () => (await import("../../../../../../..")).upload.PresignedRequest
                )
            )
            .optional()
    ),
});

export declare namespace CreateGameBuildResponse {
    interface Raw {
        build_id: string;
        upload_id: string;
        image_presigned_request?: serializers.upload.PresignedRequest.Raw | null;
        image_presigned_requests?: serializers.upload.PresignedRequest.Raw[] | null;
    }
}
