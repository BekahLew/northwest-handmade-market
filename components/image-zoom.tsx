"use client"

import Image from 'next/image'
import { shimmer, toBase64 } from "@/lib/image"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export function ZoomImage({ src, alt } : { src: string, alt: string }) {
  return (
    <div className="max-w-[200px]">
        <Zoom>
            <Image
                src={src}
                alt={alt}
                width={1400}
                height={1400}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(200, 200)
                )}"`}
            />
        </Zoom>
    </div>
  )
}
