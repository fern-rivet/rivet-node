/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../core";

export const Request: core.schemas.Schema<
  serializers.identity.updateIdentityProfile.Request.Raw,
  RivetApi.UpdateIdentityProfileInput
> = core.schemas.object({
  displayName: core.schemas.property(
    "display_name",
    core.schemas.lazy(async () => (await import("../../..")).commons.DisplayName).optional()
  ),
  accountNumber: core.schemas.property(
    "account_number",
    core.schemas.lazy(async () => (await import("../../..")).commons.AccountNumber).optional()
  ),
  bio: core.schemas.lazy(async () => (await import("../../..")).commons.Bio).optional(),
});

export declare namespace Request {
  interface Raw {
    display_name?: serializers.commons.DisplayName.Raw | null;
    account_number?: serializers.commons.AccountNumber.Raw | null;
    bio?: serializers.commons.Bio.Raw | null;
  }
}
