/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const PartyExternalLinks: core.schemas.ObjectSchema<
  serializers.commons.PartyExternalLinks.Raw,
  RivetApi.commons.PartyExternalLinks
> = core.schemas.object({
  chat: core.schemas.string(),
});

export declare namespace PartyExternalLinks {
  interface Raw {
    chat: string;
  }
}
