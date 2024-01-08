"use client"
import Image from 'next/image'
import { shimmer, toBase64 } from "@/lib/image"
import Rellax from "rellax";

export function ParallaxImageRight() {
    function handleImageLoad(e) {
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
    <div className="justify-end absolute right-0 top-[42rem] hidden sm:block">
        <Image
          onLoadingComplete={(e) => {
            handleImageLoad(e);
          }}
          src="/images/flower-right.png"
          height={500}
          width={250}
          className="scrollingImageRight rellax"
          data-rellax-speed="2"
        />
    </div>
  )
}
