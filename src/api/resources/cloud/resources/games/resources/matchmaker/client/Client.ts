/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../../../environments";
import * as core from "../../../../../../../../core";
import * as Rivet from "../../../../../../..";
import * as serializers from "../../../../../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../../../../../errors";
import { default as URLSearchParams } from "@ungap/url-search-params";

export declare namespace Matchmaker {
    interface Options {
        environment?: core.Supplier<environments.RivetEnvironment | environments.RivetEnvironmentUrls>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class Matchmaker {
    constructor(protected readonly _options: Matchmaker.Options) {}

    /**
     * Exports lobby history over a given query time span.
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     */
    public async exportMatchmakerLobbyHistory(
        gameId: string,
        request: Rivet.cloud.games.ExportMatchmakerLobbyHistoryRequest,
        requestOptions?: Matchmaker.RequestOptions
    ): Promise<Rivet.cloud.games.ExportMatchmakerLobbyHistoryResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.RivetEnvironment.Production)
                    .cloud,
                `/games/${gameId}/matchmaker/lobbies/export-history`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@rivet-gg/api",
                "X-Fern-SDK-Version": "v23.1.0-rc2",
            },
            contentType: "application/json",
            body: await serializers.cloud.games.ExportMatchmakerLobbyHistoryRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.cloud.games.ExportMatchmakerLobbyHistoryResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new Rivet.InternalError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Rivet.RateLimitError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new Rivet.ForbiddenError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 408:
                    throw new Rivet.UnauthorizedError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Rivet.NotFoundError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 400:
                    throw new Rivet.BadRequestError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.RivetError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
     * Deletes a matchmaker lobby, stopping it immediately.
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     */
    public async deleteMatchmakerLobby(
        gameId: string,
        lobbyId: string,
        requestOptions?: Matchmaker.RequestOptions
    ): Promise<Rivet.cloud.games.DeleteMatchmakerLobbyResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.RivetEnvironment.Production)
                    .cloud,
                `/games/${gameId}/matchmaker/lobbies/${lobbyId}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@rivet-gg/api",
                "X-Fern-SDK-Version": "v23.1.0-rc2",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.cloud.games.DeleteMatchmakerLobbyResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new Rivet.InternalError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Rivet.RateLimitError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new Rivet.ForbiddenError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 408:
                    throw new Rivet.UnauthorizedError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Rivet.NotFoundError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 400:
                    throw new Rivet.BadRequestError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.RivetError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
     * Returns the logs for a given lobby.
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     */
    public async getLobbyLogs(
        gameId: string,
        lobbyId: string,
        request: Rivet.cloud.games.GetLobbyLogsRequest,
        requestOptions?: Matchmaker.RequestOptions
    ): Promise<Rivet.cloud.games.GetLobbyLogsResponse> {
        const { stream, watchIndex } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("stream", stream);
        if (watchIndex != null) {
            _queryParams.append("watch_index", watchIndex);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.RivetEnvironment.Production)
                    .cloud,
                `/games/${gameId}/matchmaker/lobbies/${lobbyId}/logs`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@rivet-gg/api",
                "X-Fern-SDK-Version": "v23.1.0-rc2",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.cloud.games.GetLobbyLogsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new Rivet.InternalError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Rivet.RateLimitError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new Rivet.ForbiddenError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 408:
                    throw new Rivet.UnauthorizedError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Rivet.NotFoundError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 400:
                    throw new Rivet.BadRequestError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.RivetError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
     * Generates a download URL for logs.
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     */
    public async exportLobbyLogs(
        gameId: string,
        lobbyId: string,
        request: Rivet.cloud.games.ExportLobbyLogsRequest,
        requestOptions?: Matchmaker.RequestOptions
    ): Promise<Rivet.cloud.games.ExportLobbyLogsResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.RivetEnvironment.Production)
                    .cloud,
                `/games/${gameId}/matchmaker/lobbies/${lobbyId}/logs/export`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@rivet-gg/api",
                "X-Fern-SDK-Version": "v23.1.0-rc2",
            },
            contentType: "application/json",
            body: await serializers.cloud.games.ExportLobbyLogsRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.cloud.games.ExportLobbyLogsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new Rivet.InternalError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Rivet.RateLimitError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new Rivet.ForbiddenError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 408:
                    throw new Rivet.UnauthorizedError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Rivet.NotFoundError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 400:
                    throw new Rivet.BadRequestError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.RivetError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
