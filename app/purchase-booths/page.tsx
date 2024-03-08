import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
// import { seedSanityData } from "@/lib/seed"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
// import { ProductSort } from "@/components/product-sort"
import { ZoomImage } from "@/components/image-zoom"

// interface Props {
//   searchParams: {
//     date?: string
//     price?: string
//     location?: string
//     showDate?: string
//     boothSize?: string
//     search?: string
//   }
// }

export default async function Page() {
  // const {date = "desc", price, location, showDate, boothSize, search} = searchParams
  // const priceOrder = price ? `| order(price ${price})` : ""
  // const dateOrder = price ? `| order(_createdAt ${price})` : ""
  // const order = `${priceOrder}${dateOrder}`

  // const productFilter = `_type == "product"`
  // const colorFilter = location ? `&& "${location}" in location` : ""
  // const showDateFilter = showDate ? `&& "${showDate}" in showDate` : ""
  // const boothSizeFilter = boothSize ? `&& "${boothSize}" in boothSize` : ""
  // const searchFilter = search ? `&& name match "${search}"` : ""
  // const filter = `*[${productFilter}${colorFilter}${showDateFilter}${boothSizeFilter}${searchFilter}]`

  const products = await client.fetch<SanityProduct[]>(
    groq` {
      _id,
      _createdAt,
      name,
      images,
      currency,
      price,
      description,
      boothSize,
      showDate,
      locations,
      "slug": slug.current
  }`)
  
  return (
    <div className="max-w-[2000px] mx-auto">
      <div className="px-4 pt-8 text-center grid grid-cols-1 md:grid-cols-2 gap-2 max-w-[1000px] mx-auto">
        <div className="max-w-[400px] mx-auto mt-[2rem]">
          <h1 className="text-[2rem]">Purchase Vendor Booths</h1>
          <p>Click on the maps to view the vendor booth layout. The 6&apos; x 8.5&apos; booths do not include the 2 foot benches behind some of them.</p>
        </div>
        
        <div className="flex justify-evenly gap-2">
          <div>
            <span>Numbered Map</span>
            <ZoomImage src="/images/vendor-map-numbers.png" alt="graphical image of vendor spots and associated numbers" />
          </div>
          
          <div>
            <span>Booth Measurements</span>
            <ZoomImage src="/images/vendor-map-sizes.png" alt="graphical image of vendor spots and associated measurements" />
          </div>
        </div>
      </div>
      <div>
        <main className="mx-auto px-6 pt-[3rem]">
          {/* <div className="flex items-center justify-between flex-col sm:flex-row border-b border-gray-200 pb-4 pt-[2rem] dark:border-gray-800">
            <ProductSort />
          </div> */}

          <section aria-labelledby="products-heading" className="pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className={cn("grid grid-cols-1 gap-x-8 gap-y-10", products.length > 0 ? 
            "lg:grid-cols-7" : "lg:grid-cols-[1fr_3fr]")}>
              {/* <ProductFilters /> */}
              <ProductGrid products={products} />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
