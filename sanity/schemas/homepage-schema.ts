import { defineType } from "sanity"

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "string",
    },
    {
      title: "Hero Image",
      name: "heroImage",
      type: "image",
    },
    {
      title: "Hero Image Alt Text",
      name: "heroImageAltText",
      type: "string",
    },
    {
      title: "Main Title",
      name: "mainTitle",
      type: "string",
    },
    {
      title: "Snippet",
      name: "snippet",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Main Text",
      name: "mainText",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Button Text",
      name: "bottomButtonText",
      type: "string",
    },
    {
      title: "Button Link",
      name: "bottomButtonLink",
      type: "url",
    },
    {
      title: "Secondary Title",
      name: "secondaryTitle",
      type: "string",
    },
    {
      title: "Secondary Text",
      name: "secondaryText",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Button Text",
      name: "buttonText",
      type: "string",
    },
    {
      title: "Button Link",
      name: "buttonLink",
      type: "url",
    },
  ],
})
