import Link from "next/link"
import Image from 'next/image'
import { shimmer, toBase64 } from "@/lib/image"

import { siteConfig } from "@/config/site"

export function HeaderLogo() {
  return (
    <div className="flex gap-6 md:gap-10 items-center">
      <Link href="/" className="flex items-center space-x-2">
      <Image
          src="/images/logo3.png"
          alt="orange and green stencil flowers"
          width={45}
          height={45}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(45, 45)
          )}"`}
        />
        <span className="inline-block text-xl font-bold leading-none hidden lg:block">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  )
}
