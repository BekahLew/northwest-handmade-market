import { defineType } from "sanity"

export const mainpage = defineType({
  name: "mainPage",
  title: "Main Page",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    }
  ],
})
