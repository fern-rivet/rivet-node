/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface ListLobbiesResponse {
    gameModes: Rivet.matchmaker.GameModeInfo[];
    regions: Rivet.matchmaker.RegionInfo[];
    lobbies: Rivet.matchmaker.LobbyInfo[];
}