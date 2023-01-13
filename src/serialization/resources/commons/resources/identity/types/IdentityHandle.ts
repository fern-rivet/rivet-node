/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const IdentityHandle: core.schemas.ObjectSchema<
  serializers.commons.IdentityHandle.Raw,
  RivetApi.commons.IdentityHandle
> = core.schemas.object({
  identityId: core.schemas.property("identity_id", core.schemas.string()),
  displayName: core.schemas.property(
    "display_name",
    core.schemas.lazy(async () => (await import("../../../../..")).commons.DisplayName)
  ),
  accountNumber: core.schemas.property(
    "account_number",
    core.schemas.lazy(async () => (await import("../../../../..")).commons.AccountNumber)
  ),
  avatarUrl: core.schemas.property("avatar_url", core.schemas.string()),
  presence: core.schemas.lazyObject(async () => (await import("../../../../..")).commons.IdentityPresence).optional(),
  party: core.schemas.lazyObject(async () => (await import("../../../../..")).commons.PartyHandle).optional(),
  isRegistered: core.schemas.property("is_registered", core.schemas.boolean()),
  external: core.schemas.lazyObject(async () => (await import("../../../../..")).commons.IdentityExternalLinks),
});

export declare namespace IdentityHandle {
  interface Raw {
    identity_id: string;
    display_name: serializers.commons.DisplayName.Raw;
    account_number: serializers.commons.AccountNumber.Raw;
    avatar_url: string;
    presence?: serializers.commons.IdentityPresence.Raw | null;
    party?: serializers.commons.PartyHandle.Raw | null;
    is_registered: boolean;
    external: serializers.commons.IdentityExternalLinks.Raw;
  }
}
