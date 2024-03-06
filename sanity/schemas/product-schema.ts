import { defineType, defineField } from "sanity";

export const product = defineType({
    name: "product",
    title: "Products",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string"
        }),
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name"
            }
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: "image" }]
        },
        {
            name: "showDate",
            title: "Show Date",
            type: "array",
            of: [{ type: "string" }]
        },
        {
            name: "boothSize",
            title: "Booth Size",
            type: "array",
            of: [{ type: "string" }]
        },
        {
            name: "location",
            title: "Location",
            type: "array",
            of: [{ type: "string" }]
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "currency",
            title: "Currency",
            type: "string"
        },
        {
            name: "price",
            title: "Price",
            type: "number"
        }
    ]
})
