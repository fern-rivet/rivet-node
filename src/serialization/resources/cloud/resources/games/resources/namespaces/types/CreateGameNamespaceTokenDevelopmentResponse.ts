/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import * as Rivet from "../../../../../../../../api";
import * as core from "../../../../../../../../core";

export const CreateGameNamespaceTokenDevelopmentResponse: core.serialization.ObjectSchema<
    serializers.cloud.games.namespaces.CreateGameNamespaceTokenDevelopmentResponse.Raw,
    Rivet.cloud.games.namespaces.CreateGameNamespaceTokenDevelopmentResponse
> = core.serialization.object({
    token: core.serialization.string(),
});

export declare namespace CreateGameNamespaceTokenDevelopmentResponse {
    interface Raw {
        token: string;
    }
}
