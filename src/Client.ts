/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Client as IdentityClient } from "./api/resources/identity/client/Client";

export declare namespace RivetApiClient {
  interface Options {
    environment?: environments.RivetApiEnvironment | string;
    token?: core.Supplier<core.BearerToken>;
  }
}

export class RivetApiClient {
  constructor(private readonly options: RivetApiClient.Options) {}

  #identity: IdentityClient | undefined;

  public get identity(): IdentityClient {
    return (this.#identity ??= new IdentityClient(this.options));
  }
}
