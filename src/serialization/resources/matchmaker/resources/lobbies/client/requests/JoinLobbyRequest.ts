/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../core";

export const JoinLobbyRequest: core.serialization.Schema<
    serializers.matchmaker.JoinLobbyRequest.Raw,
    Rivet.matchmaker.JoinLobbyRequest
> = core.serialization.object({
    lobbyId: core.serialization.property("lobby_id", core.serialization.string()),
    captcha: core.serialization.lazyObject(async () => (await import("../../../../../..")).captcha.Config).optional(),
    verificationData: core.serialization.property("verification_data", core.serialization.unknown().optional()),
});

export declare namespace JoinLobbyRequest {
    interface Raw {
        lobby_id: string;
        captcha?: serializers.captcha.Config.Raw | null;
        verification_data?: unknown | null;
    }
}
