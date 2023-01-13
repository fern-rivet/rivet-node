/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const IdentityEmailLinkedAccount: core.schemas.ObjectSchema<
  serializers.commons.IdentityEmailLinkedAccount.Raw,
  RivetApi.commons.IdentityEmailLinkedAccount
> = core.schemas.object({
  email: core.schemas.lazy(async () => (await import("../../../../..")).commons.Email),
});

export declare namespace IdentityEmailLinkedAccount {
  interface Raw {
    email: serializers.commons.Email.Raw;
  }
}
