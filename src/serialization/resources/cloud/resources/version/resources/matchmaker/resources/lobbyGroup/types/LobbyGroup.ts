/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../../..";
import * as Rivet from "../../../../../../../../../../api";
import * as core from "../../../../../../../../../../core";

export const LobbyGroup: core.serialization.ObjectSchema<
    serializers.cloud.version.matchmaker.LobbyGroup.Raw,
    Rivet.cloud.version.matchmaker.LobbyGroup
> = core.serialization.object({
    nameId: core.serialization.property("name_id", core.serialization.string()),
    regions: core.serialization.list(
        core.serialization.lazyObject(
            async () => (await import("../../../../../../../../..")).cloud.version.matchmaker.LobbyGroupRegion
        )
    ),
    maxPlayersNormal: core.serialization.property("max_players_normal", core.serialization.number()),
    maxPlayersDirect: core.serialization.property("max_players_direct", core.serialization.number()),
    maxPlayersParty: core.serialization.property("max_players_party", core.serialization.number()),
    runtime: core.serialization.lazyObject(
        async () => (await import("../../../../../../../../..")).cloud.version.matchmaker.LobbyGroupRuntime
    ),
});

export declare namespace LobbyGroup {
    interface Raw {
        name_id: string;
        regions: serializers.cloud.version.matchmaker.LobbyGroupRegion.Raw[];
        max_players_normal: number;
        max_players_direct: number;
        max_players_party: number;
        runtime: serializers.cloud.version.matchmaker.LobbyGroupRuntime.Raw;
    }
}
