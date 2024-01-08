"use client"
import Image from 'next/image'
import { shimmer, toBase64 } from "@/lib/image"
import Rellax from "rellax";

export function ParallaxImageBottomRight() {
    function handleImageLoad(e) {
        const scrollingImageBottomRight = document.querySelectorAll(".scrollingImageBottomRight")[0];
        new Rellax(scrollingImageBottomRight, {
          horizontal: true,
          callback: function (position) {
            // callback every position change
            console.log(position);
          }
        });
      }
      
  return (
    <div className="justify-end absolute right-0 bottom-[0] hidden sm:block">
        <Image
          onLoadingComplete={(e) => {
            handleImageLoad(e);
          }}
          src="/images/flower-bottom-right.png"
          height={500}
          width={250}
          className="scrollingImageBottomRight rellax"
          data-rellax-speed="2"
        />
    </div>
  )
}
