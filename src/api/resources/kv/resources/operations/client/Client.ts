/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import { Rivet } from "@rivet-gg/api";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.RivetEnvironment | environments.RivetEnvironmentUrls;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Returns a specific key-value entry by key.
     */
    public async get(request: Rivet.kv.GetOperationInput): Promise<Rivet.kv.GetOutput> {
        const { key, watchIndex, namespaceId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("key", key);
        if (watchIndex != null) {
            _queryParams.append("watch_index", watchIndex);
        }

        if (namespaceId != null) {
            _queryParams.append("namespace_id", namespaceId);
        }

        const _response = await core.fetcher({
            url: urlJoin((this.options.environment ?? environments.RivetEnvironment.Production).Kv, "/entries"),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.kv.GetOutput.parseOrThrow(_response.body as serializers.kv.GetOutput.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.RivetError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.RivetError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.RivetTimeoutError();
            case "unknown":
                throw new errors.RivetError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Puts (sets or overwrites) a key-value entry by key.
     */
    public async put(request: Rivet.kv.PutInput): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin((this.options.environment ?? environments.RivetEnvironment.Production).Kv, "/entries"),
            method: "PUT",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.kv.PutInput.jsonOrThrow(request),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.RivetError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.RivetError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.RivetTimeoutError();
            case "unknown":
                throw new errors.RivetError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Deletes a key-value entry by key.
     */
    public async delete(request: Rivet.kv.DeleteOperationInput): Promise<void> {
        const { key, namespaceId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("key", key);
        if (namespaceId != null) {
            _queryParams.append("namespace_id", namespaceId);
        }

        const _response = await core.fetcher({
            url: urlJoin((this.options.environment ?? environments.RivetEnvironment.Production).Kv, "/entries"),
            method: "DELETE",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.RivetError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.RivetError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.RivetTimeoutError();
            case "unknown":
                throw new errors.RivetError({
                    message: _response.error.errorMessage,
                });
        }
    }
}