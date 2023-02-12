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
     * Completes the email verification process.
     */
    public async completeEmailVerification(
        request: Rivet.auth.CompleteEmailVerificationInput
    ): Promise<Rivet.auth.CompleteEmailVerificationOutput> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).Auth,
                "/identity/email/complete-verification"
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.auth.CompleteEmailVerificationInput.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.auth.CompleteEmailVerificationOutput.parseOrThrow(
                _response.body as serializers.auth.CompleteEmailVerificationOutput.Raw,
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
     * Starts the verification process for linking an email to your identity.
     */
    public async startEmailVerification(
        request: Rivet.auth.StartEmailVerificationInput
    ): Promise<Rivet.auth.StartEmailVerificationOutput> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).Auth,
                "/identity/email/start-verification"
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.auth.StartEmailVerificationInput.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.auth.StartEmailVerificationOutput.parseOrThrow(
                _response.body as serializers.auth.StartEmailVerificationOutput.Raw,
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
}