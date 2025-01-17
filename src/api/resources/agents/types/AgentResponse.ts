/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api-beta";

/**
 * @example
 *     {
 *         data: {
 *             topics: [Flatfile.EventTopic.UploadStarted],
 *             compiler: Flatfile.Compiler.Js,
 *             source: "module.exports = { routeEvent: async (...args) => { console.log(args) } }"
 *         }
 *     }
 */
export interface AgentResponse {
    data: Flatfile.Agent;
}
