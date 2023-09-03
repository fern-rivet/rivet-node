/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface Config {
    unity?: Rivet.cloud.version.engine.UnityConfig;
    unreal?: Rivet.cloud.version.engine.UnrealConfig;
    godot?: Rivet.cloud.version.engine.GodotConfig;
    html5?: Rivet.cloud.version.engine.Html5Config;
}
