import { defineType } from "sanity"

export const vendorOverview = defineType({
  name: "vendorOverview",
  title: "Vendor Overview",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    }
  ],
})
