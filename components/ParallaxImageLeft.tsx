"use client"
import Image from 'next/image'
import { shimmer, toBase64 } from "@/lib/image"
import Rellax from "rellax";

export function ParallaxImageLeft() {
    function handleImageLoad(e) {
        const scrollingImage = document.querySelectorAll(".scrollingImage")[0];
        new Rellax(scrollingImage, {
          horizontal: true,
          callback: function (position) {
            // callback every position change
            console.log(position);
          }
        });
      }
      
  return (
    <div className="absolute left-0 top-[53rem] hidden sm:block">
        <Image
          onLoadingComplete={(e) => {
            handleImageLoad(e);
          }}
          src="/images/flower-left.png"
          height={500}
          width={150}
          className="scrollingImage rellax"
          data-rellax-speed="2"
        />
    </div>
  )
}
