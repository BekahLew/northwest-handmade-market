"use client"
import Image from 'next/image'

export function Spacer() {
  return (
    <Image
          src="/images/spacer.png"
          height={40}
          width={250}
          className="spacer m-auto"
        />
  )
}
