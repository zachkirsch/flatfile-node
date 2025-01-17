/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Flatfile } from "@flatfile/api-beta";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Sheets {
    interface Options {
        environment?: environments.FlatfileEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Sheets {
    constructor(private readonly options: Sheets.Options) {}

    /**
     * Returns sheets in a workbook
     */
    public async list(workbookId: Flatfile.WorkbookId): Promise<Flatfile.ListSheetsResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/workbooks/${await serializers.WorkbookId.jsonOrThrow(workbookId)}/sheets/`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.ListSheetsResponse.parseOrThrow(
                _response.body as serializers.ListSheetsResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlatfileError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a sheet in a workbook
     */
    public async get(workbookId: Flatfile.WorkbookId, sheetId: Flatfile.SheetId): Promise<Flatfile.SheetResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/workbooks/${await serializers.WorkbookId.jsonOrThrow(
                    workbookId
                )}/sheets//${await serializers.SheetId.jsonOrThrow(sheetId)}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.SheetResponse.parseOrThrow(_response.body as serializers.SheetResponse.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlatfileError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns records from a sheet in a workbook
     */
    public async getRecords(
        workbookId: Flatfile.WorkbookId,
        sheetId: Flatfile.SheetId,
        request: Flatfile.GetRecordsRequest = {}
    ): Promise<Flatfile.RecordsResponse> {
        const {
            versionId,
            sortField,
            sortDirection,
            filter,
            filterField,
            pageSize,
            pageNumber,
            includeCounts,
            searchValue,
        } = request;
        const _queryParams = new URLSearchParams();
        if (versionId != null) {
            _queryParams.append("versionId", versionId);
        }

        if (sortField != null) {
            _queryParams.append("sortField", sortField);
        }

        if (sortDirection != null) {
            _queryParams.append("sortDirection", sortDirection);
        }

        if (filter != null) {
            _queryParams.append("filter", filter);
        }

        if (filterField != null) {
            _queryParams.append("filterField", filterField);
        }

        if (pageSize != null) {
            _queryParams.append("pageSize", pageSize.toString());
        }

        if (pageNumber != null) {
            _queryParams.append("pageNumber", pageNumber.toString());
        }

        if (includeCounts != null) {
            _queryParams.append("includeCounts", includeCounts.toString());
        }

        if (searchValue != null) {
            _queryParams.append("searchValue", searchValue);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/workbooks/${await serializers.WorkbookId.jsonOrThrow(
                    workbookId
                )}/sheets//${await serializers.SheetId.jsonOrThrow(sheetId)}/records`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.RecordsResponse.parseOrThrow(_response.body as serializers.RecordsResponse.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlatfileError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates existing records in a workbook sheet
     */
    public async updateRecords(
        workbookId: Flatfile.WorkbookId,
        sheetId: Flatfile.SheetId,
        request: Flatfile.UpdateRecordsRequest
    ): Promise<Flatfile.RecordsResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/workbooks/${await serializers.WorkbookId.jsonOrThrow(
                    workbookId
                )}/sheets//${await serializers.SheetId.jsonOrThrow(sheetId)}/records`
            ),
            method: "PUT",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.UpdateRecordsRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.RecordsResponse.parseOrThrow(_response.body as serializers.RecordsResponse.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlatfileError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Adds records to a workbook sheet
     */
    public async insertRecords(
        workbookId: Flatfile.WorkbookId,
        sheetId: Flatfile.SheetId,
        request: Flatfile.RecordData[]
    ): Promise<Flatfile.RecordsResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/workbooks/${await serializers.WorkbookId.jsonOrThrow(
                    workbookId
                )}/sheets//${await serializers.SheetId.jsonOrThrow(sheetId)}/records`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.sheets.insertRecords.Request.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.RecordsResponse.parseOrThrow(_response.body as serializers.RecordsResponse.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlatfileError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Deletes records from a workbook sheet
     */
    public async deleteRecords(workbookId: Flatfile.WorkbookId, sheetId: Flatfile.SheetId): Promise<Flatfile.Success> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/workbooks/${await serializers.WorkbookId.jsonOrThrow(
                    workbookId
                )}/sheets//${await serializers.SheetId.jsonOrThrow(sheetId)}/records`
            ),
            method: "DELETE",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.Success.parseOrThrow(_response.body as serializers.Success.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlatfileError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns records from a sheet in a workbook as a csv file
     */
    public async getRecordsAsCsv(
        workbookId: Flatfile.WorkbookId,
        sheetId: Flatfile.SheetId,
        request: Flatfile.GetRecordsCsvRequest = {}
    ): Promise<string> {
        const { versionId, sortField, sortDirection, filter, filterField } = request;
        const _queryParams = new URLSearchParams();
        if (versionId != null) {
            _queryParams.append("versionId", versionId);
        }

        if (sortField != null) {
            _queryParams.append("sortField", sortField);
        }

        if (sortDirection != null) {
            _queryParams.append("sortDirection", sortDirection);
        }

        if (filter != null) {
            _queryParams.append("filter", filter);
        }

        if (filterField != null) {
            _queryParams.append("filterField", filterField);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/workbooks/${await serializers.WorkbookId.jsonOrThrow(
                    workbookId
                )}/sheets//${await serializers.SheetId.jsonOrThrow(sheetId)}/download`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.sheets.getRecordsAsCsv.Response.parseOrThrow(
                _response.body as serializers.sheets.getRecordsAsCsv.Response.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlatfileError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns fields from a sheet in a workbook
     */
    public async getFields(
        workbookId: Flatfile.WorkbookId,
        sheetId: Flatfile.SheetId,
        request: Flatfile.GetFieldsRequest = {}
    ): Promise<Flatfile.GetFieldsResponse> {
        const { sortField, sortDirection, filter, filterField, pageSize, pageNumber, distinct } = request;
        const _queryParams = new URLSearchParams();
        if (sortField != null) {
            _queryParams.append("sortField", sortField);
        }

        if (sortDirection != null) {
            _queryParams.append("sortDirection", sortDirection);
        }

        if (filter != null) {
            _queryParams.append("filter", filter);
        }

        if (filterField != null) {
            _queryParams.append("filterField", filterField);
        }

        if (pageSize != null) {
            _queryParams.append("pageSize", pageSize.toString());
        }

        if (pageNumber != null) {
            _queryParams.append("pageNumber", pageNumber.toString());
        }

        if (distinct != null) {
            _queryParams.append("distinct", distinct.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/workbooks/${await serializers.WorkbookId.jsonOrThrow(
                    workbookId
                )}/sheets//${await serializers.SheetId.jsonOrThrow(sheetId)}/fields`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.GetFieldsResponse.parseOrThrow(
                _response.body as serializers.GetFieldsResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlatfileError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a field from a sheet in a workbook
     */
    public async getField(
        workbookId: Flatfile.WorkbookId,
        sheetId: Flatfile.SheetId,
        fieldId: Flatfile.FieldId,
        request: Flatfile.GetFieldRequest = {}
    ): Promise<Flatfile.FieldResponse> {
        const { sortField, sortDirection, filter, pageSize, pageNumber, distinct } = request;
        const _queryParams = new URLSearchParams();
        if (sortField != null) {
            _queryParams.append("sortField", sortField);
        }

        if (sortDirection != null) {
            _queryParams.append("sortDirection", sortDirection);
        }

        if (filter != null) {
            _queryParams.append("filter", filter);
        }

        if (pageSize != null) {
            _queryParams.append("pageSize", pageSize.toString());
        }

        if (pageNumber != null) {
            _queryParams.append("pageNumber", pageNumber.toString());
        }

        if (distinct != null) {
            _queryParams.append("distinct", distinct.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/workbooks/${await serializers.WorkbookId.jsonOrThrow(
                    workbookId
                )}/sheets//${await serializers.SheetId.jsonOrThrow(
                    sheetId
                )}/fields/${await serializers.FieldId.jsonOrThrow(fieldId)}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.FieldResponse.parseOrThrow(_response.body as serializers.FieldResponse.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlatfileError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Searches for the given value in a field and returns the records that match the search criteria
     */
    public async find(
        workbookId: Flatfile.WorkbookId,
        sheetId: Flatfile.SheetId,
        fieldId: Flatfile.FieldId,
        searchValue: string,
        request: Flatfile.FindRecordsRequest = {}
    ): Promise<Flatfile.RecordsResponse> {
        const { pageSize, pageNumber } = request;
        const _queryParams = new URLSearchParams();
        if (pageSize != null) {
            _queryParams.append("pageSize", pageSize.toString());
        }

        if (pageNumber != null) {
            _queryParams.append("pageNumber", pageNumber.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/workbooks/${await serializers.WorkbookId.jsonOrThrow(
                    workbookId
                )}/sheets//${await serializers.SheetId.jsonOrThrow(
                    sheetId
                )}/fields/${await serializers.FieldId.jsonOrThrow(fieldId)}/find/${searchValue}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.RecordsResponse.parseOrThrow(_response.body as serializers.RecordsResponse.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlatfileError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Searches for the given searchValue in a field and replaces all instances of that value with replaceValue
     */
    public async findAndReplace(
        workbookId: Flatfile.WorkbookId,
        sheetId: Flatfile.SheetId,
        fieldId: Flatfile.FieldId,
        searchValue: string,
        request: Flatfile.FindAndReplaceRecordRequest
    ): Promise<Flatfile.RecordsResponse> {
        const { pageSize, pageNumber, ..._body } = request;
        const _queryParams = new URLSearchParams();
        if (pageSize != null) {
            _queryParams.append("pageSize", pageSize.toString());
        }

        if (pageNumber != null) {
            _queryParams.append("pageNumber", pageNumber.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/workbooks/${await serializers.WorkbookId.jsonOrThrow(
                    workbookId
                )}/sheets//${await serializers.SheetId.jsonOrThrow(
                    sheetId
                )}/fields/${await serializers.FieldId.jsonOrThrow(fieldId)}/replace/${searchValue}`
            ),
            method: "PUT",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
            body: await serializers.FindAndReplaceRecordRequest.jsonOrThrow(_body),
        });
        if (_response.ok) {
            return await serializers.RecordsResponse.parseOrThrow(_response.body as serializers.RecordsResponse.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlatfileError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Creates a new version of a workbook sheet
     */
    public async createVersion(
        workbookId: Flatfile.WorkbookId,
        sheetId: Flatfile.SheetId
    ): Promise<Flatfile.CreateSheetVersionResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/workbooks/${await serializers.WorkbookId.jsonOrThrow(
                    workbookId
                )}/sheets//${await serializers.SheetId.jsonOrThrow(sheetId)}/versions`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.CreateSheetVersionResponse.parseOrThrow(
                _response.body as serializers.CreateSheetVersionResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlatfileError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
