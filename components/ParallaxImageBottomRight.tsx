"use client"
import Image from 'next/image'
import Rellax from "rellax";

export function ParallaxImageBottomRight() {
    function handleImageLoad(e: any) {
        const scrollingImageBottomRight = document.querySelectorAll(".scrollingImageBottomRight")[0];
        new Rellax(scrollingImageBottomRight, {
          horizontal: true,
          callback: function (position) {
            // callback every position change
            // console.log(position);
          }
        });
      }
      
  return (
    <div className="justify-end absolute right-0 bottom-[10rem] hidden md:block z-[1]">
        <Image
          onLoadingComplete={(e: any) => {
            handleImageLoad(e);
          }}
          src="/images/flower-bottom-right.png"
          height={250}
          width={200}
          className="scrollingImageBottomRight rellax"
          data-rellax-speed="2"
          alt="rustic brown and orange flower bouquet"
        />
    </div>
  )
}
