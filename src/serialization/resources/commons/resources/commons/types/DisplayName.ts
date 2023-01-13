/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const DisplayName: core.schemas.Schema<serializers.commons.DisplayName.Raw, RivetApi.commons.DisplayName> =
  core.schemas.string();

export declare namespace DisplayName {
  type Raw = string;
}
