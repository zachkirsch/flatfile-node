/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api-beta";

/**
 * A place to store your workbooks
 */
export interface Space extends Flatfile.spaces.SpaceConfig {
    id: Flatfile.SpaceId;
    /** Amount of workbooks in the space */
    workbookCount?: number;
    /** Amount of files in the space */
    filesCount?: number;
    createdByUserId?: Flatfile.UserId;
    /** User name who created space */
    createdByUserName?: string;
    /** Guest link to the space */
    guestLink?: string;
}
