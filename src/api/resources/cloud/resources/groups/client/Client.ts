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
     * Validates information used to create a new group.
     */
    public async validateGroup(request: Rivet.cloud.ValidateGroupInput): Promise<Rivet.cloud.ValidateGroupOutput> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).cloud,
                "/groups/validate"
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.cloud.ValidateGroupInput.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.cloud.ValidateGroupOutput.parseOrThrow(
                _response.body as serializers.cloud.ValidateGroupOutput.Raw,
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
     * Returns billing information for the given group over the given query time span.
     */
    public async getGroupBilling(
        groupId: string,
        request: Rivet.cloud.GetGroupBillingInput = {}
    ): Promise<Rivet.cloud.GetGroupBillingOutput> {
        const { queryStart, queryEnd } = request;
        const _queryParams = new URLSearchParams();
        if (queryStart != null) {
            _queryParams.append("query_start", queryStart.toString());
        }

        if (queryEnd != null) {
            _queryParams.append("query_end", queryEnd.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).cloud,
                `/groups/${groupId}/billing`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.cloud.GetGroupBillingOutput.parseOrThrow(
                _response.body as serializers.cloud.GetGroupBillingOutput.Raw,
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
     * Returns a list of invoices for the given group.
     */
    public async getGroupInvoicesList(
        groupId: string,
        request: Rivet.cloud.GetGroupInvoicesListInput = {}
    ): Promise<Rivet.cloud.GetGroupInvoicesListOutput> {
        const { anchor, limit } = request;
        const _queryParams = new URLSearchParams();
        if (anchor != null) {
            _queryParams.append("anchor", anchor);
        }

        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).cloud,
                `/groups/${groupId}/billing/invoices`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.cloud.GetGroupInvoicesListOutput.parseOrThrow(
                _response.body as serializers.cloud.GetGroupInvoicesListOutput.Raw,
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
     * Returns a list of payments for the given group.
     */
    public async getGroupPaymentsList(
        groupId: string,
        request: Rivet.cloud.GetGroupPaymentsListInput = {}
    ): Promise<Rivet.cloud.GetGroupPaymentsListOutput> {
        const { startPaymentId } = request;
        const _queryParams = new URLSearchParams();
        if (startPaymentId != null) {
            _queryParams.append("start_payment_id", startPaymentId);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).cloud,
                `/groups/${groupId}/billing/payments`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.cloud.GetGroupPaymentsListOutput.parseOrThrow(
                _response.body as serializers.cloud.GetGroupPaymentsListOutput.Raw,
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
     * Returns a list of bank transfers for the given group.
     */
    public async getGroupTransfersList(
        groupId: string,
        request: Rivet.cloud.GetGroupTransfersListInput = {}
    ): Promise<Rivet.cloud.GetGroupTransfersListOutput> {
        const { startTransferId } = request;
        const _queryParams = new URLSearchParams();
        if (startTransferId != null) {
            _queryParams.append("start_transfer_id", startTransferId);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).cloud,
                `/groups/${groupId}/billing/transfers`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.cloud.GetGroupTransfersListOutput.parseOrThrow(
                _response.body as serializers.cloud.GetGroupTransfersListOutput.Raw,
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
     * Creates a checkout session for the given group.
     */
    public async groupBillingCheckout(
        groupId: string,
        request: Rivet.cloud.GroupBillingCheckoutInput
    ): Promise<Rivet.cloud.GroupBillingCheckoutOutput> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).cloud,
                `/groups/${groupId}/checkout`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.cloud.GroupBillingCheckoutInput.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.cloud.GroupBillingCheckoutOutput.parseOrThrow(
                _response.body as serializers.cloud.GroupBillingCheckoutOutput.Raw,
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
     * Converts the given group into a developer group.
     */
    public async convertGroup(groupId: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetEnvironment.Production).cloud,
                `/groups/${groupId}/convert`
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
