/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../../../environments";
import * as core from "../../../../../../../../core";
import { Rivet } from "@rivet-gg/api";
import urlJoin from "url-join";
import * as serializers from "../../../../../../../../serialization";
import * as errors from "../../../../../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.RivetEnvironment | environments.RivetEnvironmentUrls;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Returns a list of games in which the current identity is a group member of its development team.
     */
    public async getGames(request: Rivet.cloud.games.GetGamesInput = {}): Promise<Rivet.cloud.games.GetGamesOutput> {
        const { watchIndex } = request;
        const _queryParams = new URLSearchParams();
        if (watchIndex != null) {
            _queryParams.append("watch_index", watchIndex);
        }

        const _response = await core.fetcher({
            url: urlJoin((this.options.environment ?? environments.RivetEnvironment.Production).cloud, "/games"),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.cloud.games.GetGamesOutput.parseOrThrow(
                _response.body as serializers.cloud.games.GetGamesOutput.Raw,
                { allowUnknownKeys: true }
            );
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
     * Creates a new game.
     */
    public async createGame(request: Rivet.cloud.games.CreateGameInput): Promise<Rivet.cloud.games.CreateGameOutput> {
        const _response = await core.fetcher({
            url: urlJoin((this.options.environment ?? environments.RivetEnvironment.Production).cloud, "/games"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.cloud.games.CreateGameInput.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.cloud.games.CreateGameOutput.parseOrThrow(
                _response.body as serializers.cloud.games.CreateGameOutput.Raw,
                { allowUnknownKeys: true }
            );
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
     * Validates information used to create a new game.
     */
    public async validateGame(
        request: Rivet.cloud.games.ValidateGameInput
    ): Promise<Rivet.cloud.games.ValidateGameOutput> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).cloud,
                "/games/validate"
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.cloud.games.ValidateGameInput.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.cloud.games.ValidateGameOutput.parseOrThrow(
                _response.body as serializers.cloud.games.ValidateGameOutput.Raw,
                { allowUnknownKeys: true }
            );
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
     * Returns a game by its game id.
     */
    public async getGameById(
        gameId: string,
        request: Rivet.cloud.games.GetGameByIdInput = {}
    ): Promise<Rivet.cloud.games.GetGameByIdOutput> {
        const { watchIndex } = request;
        const _queryParams = new URLSearchParams();
        if (watchIndex != null) {
            _queryParams.append("watch_index", watchIndex);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).cloud,
                `/games/${gameId}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.cloud.games.GetGameByIdOutput.parseOrThrow(
                _response.body as serializers.cloud.games.GetGameByIdOutput.Raw,
                { allowUnknownKeys: true }
            );
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
     * Prepares a game banner image upload.
     */
    public async gameBannerUploadPrepare(
        gameId: string,
        request: Rivet.cloud.games.GameBannerUploadPrepareInput
    ): Promise<Rivet.cloud.games.GameBannerUploadPrepareOutput> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).cloud,
                `/games/${gameId}/banner-upload/prepare`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.cloud.games.GameBannerUploadPrepareInput.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.cloud.games.GameBannerUploadPrepareOutput.parseOrThrow(
                _response.body as serializers.cloud.games.GameBannerUploadPrepareOutput.Raw,
                { allowUnknownKeys: true }
            );
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
     * Completes an game banner image upload. Must be called after the file upload process completes.
     */
    public async gameBannerUploadComplete(gameId: string, uploadId: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).cloud,
                `/games/${gameId}/banner-upload/${uploadId}/complete`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
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
     * Prepares a game logo image upload.
     */
    public async gameLogoUploadPrepare(
        gameId: string,
        request: Rivet.cloud.games.GameLogoUploadPrepareInput
    ): Promise<Rivet.cloud.games.GameLogoUploadPrepareOutput> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).cloud,
                `/games/${gameId}/logo-upload/prepare`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.cloud.games.GameLogoUploadPrepareInput.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.cloud.games.GameLogoUploadPrepareOutput.parseOrThrow(
                _response.body as serializers.cloud.games.GameLogoUploadPrepareOutput.Raw,
                { allowUnknownKeys: true }
            );
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
     * Completes a game logo image upload. Must be called after the file upload process completes.
     */
    public async gameLogoUploadComplete(gameId: string, uploadId: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).cloud,
                `/games/${gameId}/logo-upload/${uploadId}/complete`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
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
