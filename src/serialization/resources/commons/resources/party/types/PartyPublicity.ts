/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const PartyPublicity: core.schemas.ObjectSchema<
  serializers.commons.PartyPublicity.Raw,
  RivetApi.commons.PartyPublicity
> = core.schemas.object({
  public: core.schemas.lazy(async () => (await import("../../../../..")).commons.PartyPublicityLevel),
  mutualFollowers: core.schemas.property(
    "mutual_followers",
    core.schemas.lazy(async () => (await import("../../../../..")).commons.PartyPublicityLevel)
  ),
  groups: core.schemas.lazy(async () => (await import("../../../../..")).commons.PartyPublicityLevel),
});

export declare namespace PartyPublicity {
  interface Raw {
    public: serializers.commons.PartyPublicityLevel.Raw;
    mutual_followers: serializers.commons.PartyPublicityLevel.Raw;
    groups: serializers.commons.PartyPublicityLevel.Raw;
  }
}
