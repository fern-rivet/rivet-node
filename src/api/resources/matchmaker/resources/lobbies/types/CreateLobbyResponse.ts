/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface CreateLobbyResponse {
    lobby: Rivet.matchmaker.JoinLobby;
    ports: Record<string, Rivet.matchmaker.JoinPort>;
    player: Rivet.matchmaker.JoinPlayer;
}
