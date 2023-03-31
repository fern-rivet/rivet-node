/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import { Namespaces } from "../resources/namespaces/client/Client";
import { Avatars } from "../resources/avatars/client/Client";
import { Builds } from "../resources/builds/client/Client";
import { Cdn } from "../resources/cdn/client/Client";
import { Games as Games_ } from "../resources/games/client/Client";
import { Matchmaker } from "../resources/matchmaker/client/Client";
import { Tokens } from "../resources/tokens/client/Client";
import { Versions } from "../resources/versions/client/Client";

export declare namespace Games {
    interface Options {
        environment?: environments.RivetEnvironment | environments.RivetEnvironmentUrls;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Games {
    constructor(private readonly options: Games.Options) {}

    private _namespaces: Namespaces | undefined;

    public get namespaces(): Namespaces {
        return (this._namespaces ??= new Namespaces(this.options));
    }

    private _avatars: Avatars | undefined;

    public get avatars(): Avatars {
        return (this._avatars ??= new Avatars(this.options));
    }

    private _builds: Builds | undefined;

    public get builds(): Builds {
        return (this._builds ??= new Builds(this.options));
    }

    private _cdn: Cdn | undefined;

    public get cdn(): Cdn {
        return (this._cdn ??= new Cdn(this.options));
    }

    private _games: Games_ | undefined;

    public get games(): Games_ {
        return (this._games ??= new Games_(this.options));
    }

    private _matchmaker: Matchmaker | undefined;

    public get matchmaker(): Matchmaker {
        return (this._matchmaker ??= new Matchmaker(this.options));
    }

    private _tokens: Tokens | undefined;

    public get tokens(): Tokens {
        return (this._tokens ??= new Tokens(this.options));
    }

    private _versions: Versions | undefined;

    public get versions(): Versions {
        return (this._versions ??= new Versions(this.options));
    }
}