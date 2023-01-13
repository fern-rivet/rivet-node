/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const GameLinkStatus: core.schemas.Schema<
  serializers.commons.GameLinkStatus.Raw,
  RivetApi.commons.GameLinkStatus
> = core.schemas.enum_(["incomplete", "complete", "cancelled"]);

export declare namespace GameLinkStatus {
  type Raw = "incomplete" | "complete" | "cancelled";
}
