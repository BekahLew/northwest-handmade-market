import { product } from "@/sanity/schemas/product-schema"
import { homepage } from "./schemas/homepage-schema"
import { vendorOverview } from "./schemas/vendor-overview-schema"
import { mainpage } from "./schemas/main-schema"
import { type SchemaTypeDefinition } from "sanity"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, homepage, vendorOverview, mainpage],
}
