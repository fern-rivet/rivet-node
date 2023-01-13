/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const IdentityProfile: core.schemas.ObjectSchema<
  serializers.commons.IdentityProfile.Raw,
  RivetApi.commons.IdentityProfile
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
  party: core.schemas.lazyObject(async () => (await import("../../../../..")).commons.PartySummary).optional(),
  isRegistered: core.schemas.property("is_registered", core.schemas.boolean()),
  external: core.schemas.lazyObject(async () => (await import("../../../../..")).commons.IdentityExternalLinks),
  isAdmin: core.schemas.property("is_admin", core.schemas.boolean()),
  isGameLinked: core.schemas.property("is_game_linked", core.schemas.boolean().optional()),
  devState: core.schemas.property(
    "dev_state",
    core.schemas.lazy(async () => (await import("../../../../..")).commons.IdentityDevState).optional()
  ),
  followerCount: core.schemas.property("follower_count", core.schemas.number()),
  followingCount: core.schemas.property("following_count", core.schemas.number()),
  following: core.schemas.boolean(),
  isFollowingMe: core.schemas.property("is_following_me", core.schemas.boolean()),
  isMutualFollowing: core.schemas.property("is_mutual_following", core.schemas.boolean()),
  joinTs: core.schemas.property(
    "join_ts",
    core.schemas.lazy(async () => (await import("../../../../..")).commons.Timestamp)
  ),
  bio: core.schemas.lazy(async () => (await import("../../../../..")).commons.Bio),
  linkedAccounts: core.schemas.property(
    "linked_accounts",
    core.schemas.list(core.schemas.lazy(async () => (await import("../../../../..")).commons.IdentityLinkedAccount))
  ),
  groups: core.schemas.list(
    core.schemas.lazyObject(async () => (await import("../../../../..")).commons.IdentityGroup)
  ),
  games: core.schemas.list(
    core.schemas.lazyObject(async () => (await import("../../../../..")).commons.GameStatSummary)
  ),
});

export declare namespace IdentityProfile {
  interface Raw {
    identity_id: string;
    display_name: serializers.commons.DisplayName.Raw;
    account_number: serializers.commons.AccountNumber.Raw;
    avatar_url: string;
    presence?: serializers.commons.IdentityPresence.Raw | null;
    party?: serializers.commons.PartySummary.Raw | null;
    is_registered: boolean;
    external: serializers.commons.IdentityExternalLinks.Raw;
    is_admin: boolean;
    is_game_linked?: boolean | null;
    dev_state?: serializers.commons.IdentityDevState.Raw | null;
    follower_count: number;
    following_count: number;
    following: boolean;
    is_following_me: boolean;
    is_mutual_following: boolean;
    join_ts: serializers.commons.Timestamp.Raw;
    bio: serializers.commons.Bio.Raw;
    linked_accounts: serializers.commons.IdentityLinkedAccount.Raw[];
    groups: serializers.commons.IdentityGroup.Raw[];
    games: serializers.commons.GameStatSummary.Raw[];
  }
}
