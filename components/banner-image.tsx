"use client"

import Image from "next/image"

import { shimmer, toBase64 } from "@/lib/image"

export function BannerImage({ src, alt }: { src: string, alt:string }) {
  let banner = document.getElementById("banner-image")
  function fadeOutOnScroll(element: any) {
    if (!element) {
      return
    }

    let distanceToTop = window.pageYOffset + element.getBoundingClientRect().top
    let elementHeight = element.offsetHeight
    let scrollTop = document.documentElement.scrollTop

    let opacity = 1

    if (scrollTop > distanceToTop) {
      opacity = 1 - (scrollTop - distanceToTop) / elementHeight
    }

    if (opacity >= 0) {
      element.style.opacity = opacity
    }
  }

  function scrollHandler() {
    fadeOutOnScroll(banner)
  }

  window.addEventListener("scroll", scrollHandler)

  return (
    <div className="mx-auto max-w-[2000px]" id="banner-image">
      <Image
        src={src}
        alt={alt}
        height={300}
        width={1200}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(300, 1200)
        )}"`}
        className="w-[100%]"
      />
    </div>
  )
}
