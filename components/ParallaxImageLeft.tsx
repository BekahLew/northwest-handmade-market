"use client"
import Image from 'next/image'
import { shimmer, toBase64 } from "@/lib/image"
import Rellax from "rellax";

export function ParallaxImageLeft() {
    function handleImageLoad(e: any) {
        const scrollingImage = document.querySelectorAll(".scrollingImage")[0];
        new Rellax(scrollingImage, {
          horizontal: true,
          callback: function (position) {
            // callback every position change
            // console.log(position);
          }
        });
      }
      
  return (
    <div className="absolute left-0 2xl:top-[65rem] xl:top-[58rem] top-[47rem] hidden md:block z-[1]">
        <Image
          onLoadingComplete={(e: any) => {
            handleImageLoad(e);
          }}
          src="/images/flower-left.png"
          height={250}
          width={150}
          className="scrollingImage rellax"
          data-rellax-speed="2"
          alt="rustic brown and orange flower bouquet"
        />
    </div>
  )
}
