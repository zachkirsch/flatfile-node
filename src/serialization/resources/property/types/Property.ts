/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const Property: core.serialization.Schema<serializers.Property.Raw, Flatfile.Property> = core.serialization
    .union("type", {
        string: core.serialization.lazyObject(async () => (await import("../../..")).StringProperty),
        number: core.serialization.lazyObject(async () => (await import("../../..")).NumberProperty),
        boolean: core.serialization.lazyObject(async () => (await import("../../..")).BooleanProperty),
        date: core.serialization.lazyObject(async () => (await import("../../..")).DateProperty),
        enum: core.serialization.lazyObject(async () => (await import("../../..")).EnumProperty),
        reference: core.serialization.lazyObject(async () => (await import("../../..")).ReferenceProperty),
    })
    .transform<Flatfile.Property>({
        transform: (value) => {
            switch (value.type) {
                case "string":
                    return Flatfile.Property.string(value);
                case "number":
                    return Flatfile.Property.number(value);
                case "boolean":
                    return Flatfile.Property.boolean(value);
                case "date":
                    return Flatfile.Property.date(value);
                case "enum":
                    return Flatfile.Property.enum(value);
                case "reference":
                    return Flatfile.Property.reference(value);
                default:
                    return Flatfile.Property._unknown(value);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Property {
    type Raw =
        | Property.String
        | Property.Number
        | Property.Boolean
        | Property.Date
        | Property.Enum
        | Property.Reference;

    interface String extends serializers.StringProperty.Raw {
        type: "string";
    }

    interface Number extends serializers.NumberProperty.Raw {
        type: "number";
    }

    interface Boolean extends serializers.BooleanProperty.Raw {
        type: "boolean";
    }

    interface Date extends serializers.DateProperty.Raw {
        type: "date";
    }

    interface Enum extends serializers.EnumProperty.Raw {
        type: "enum";
    }

    interface Reference extends serializers.ReferenceProperty.Raw {
        type: "reference";
    }
}
