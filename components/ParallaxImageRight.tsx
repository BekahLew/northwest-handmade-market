"use client"
import Image from 'next/image'
import { shimmer, toBase64 } from "@/lib/image"
import Rellax from "rellax";

export function ParallaxImageRight() {
    function handleImageLoad(e: any) {
        const scrollingImageRight = document.querySelectorAll(".scrollingImageRight")[0];
        new Rellax(scrollingImageRight, {
          horizontal: true,
          callback: function (position) {
            // callback every position change
            console.log(position);
          }
        });
      }
      
  return (
    <div className="justify-end absolute right-0 top-[34rem] hidden md:block z-[1]">
        <Image
          onLoadingComplete={(e: any) => {
            handleImageLoad(e);
          }}
          src="/images/flower-right.png"
          height={400}
          width={220}
          className="scrollingImageRight rellax"
          data-rellax-speed="2"
          alt="rustic brown and orange flower bouquet"
        />
    </div>
  )
}
