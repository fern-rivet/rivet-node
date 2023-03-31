/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

/**
 * A game mode.
 */
export interface GameMode {
    regions?: Record<string, Rivet.cloud.version.matchmaker.GameModeRegion>;
    maxPlayers?: number;
    maxPlayersDirect?: number;
    maxPlayersParty?: number;
    docker?: Rivet.cloud.version.matchmaker.GameModeRuntimeDocker;
    tier?: string;
    idleLobbies?: Rivet.cloud.version.matchmaker.GameModeIdleLobbiesConfig;
}