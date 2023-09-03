/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const CreateGameBuildRequest: core.serialization.ObjectSchema<
    serializers.cloud.games.CreateGameBuildRequest.Raw,
    Rivet.cloud.games.CreateGameBuildRequest
> = core.serialization.object({
    displayName: core.serialization.property("display_name", core.serialization.string()),
    imageTag: core.serialization.property("image_tag", core.serialization.string()),
    imageFile: core.serialization.property(
        "image_file",
        core.serialization.lazyObject(async () => (await import("../../../../../../..")).upload.PrepareFile)
    ),
    multipartUpload: core.serialization.property("multipart_upload", core.serialization.boolean().optional()),
});

export declare namespace CreateGameBuildRequest {
    interface Raw {
        display_name: string;
        image_tag: string;
        image_file: serializers.upload.PrepareFile.Raw;
        multipart_upload?: boolean | null;
    }
}
