/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Client as MatchmakerClient } from "./api/resources/matchmaker/client/Client";

export declare namespace RivetApiClient {
    interface Options {
        environment?: environments.RivetApiEnvironment | environments.RivetApiEnvironmentUrls;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class RivetApiClient {
    constructor(private readonly options: RivetApiClient.Options) {}

    #matchmaker: MatchmakerClient | undefined;

    public get matchmaker(): MatchmakerClient {
        return (this.#matchmaker ??= new MatchmakerClient(this.options));
    }
}
