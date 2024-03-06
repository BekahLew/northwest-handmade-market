import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import Link from "next/link"

import { SanityProduct } from "@/config/inventory"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"

interface Props {
  params: {
    slug: string
  }
}

export default async function Page({ params }: Props) {
  const product = await client.fetch<SanityProduct>(groq`*[_type == "product" && slug.current == "${params.slug}"][0] {
    _id,
    _createdAt,
    "id": _id,
    name,
    images,
    price,
    currency,
    description,
    boothSize,
    showDate,
    locations,
    "slug": slug.current
  }`)
  return (
    <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
      <Link href="/purchase-booths" className="relative text-lg top-[-2rem] text-[#c65524]">↞ Back to booth selection</Link>
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>
    </main>
  )
}
