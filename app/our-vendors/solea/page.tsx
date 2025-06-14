import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Soléa</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/solea/solea-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for solea"
          />
          <div className={styles.bio}>
            <p>About a year ago, I started noticing the little details that make every culture around the world so beautiful. I felt this pull to gather those stories and crafts and share them in one place. That&apos;s how Soléa came to life—a dream turned into a boutique filled with pieces made by artisans whose hands carry generations of tradition.</p>
            <br/>
            <p>At <a href="www.soleabrand.com">www.soleabrand.com</a>, you&apos;ll find a little piece of that dream:</p>
            <ul>
              <li>Handheld fans</li>
              <li>Pure cotton tote bags</li>
              <li>Lightweight summer clothing</li>
              <li>Wide-brim beach hats</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/solealuxury"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/solealuxury"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.pinterest.com/solealuxury"
              target="_blank"
              rel="noopener"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="dark:fill-[#E1E7EF] fill-[#0F172A]" width="35" height="35" viewBox="0 0 384 512"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg>              
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/solea/solea-1.png"}
            img1Alt={"Hand-crafted bags and clothing by solea"}
            imgSrc2={"/images/vendors/solea/solea-2.png"}
            img2Alt={"Hand-crafted bags and clothing by solea"}
            imgSrc3={"/images/vendors/solea/solea-3.png"}
            img3Alt={"Hand-crafted bags and clothing by solea"}
            imgSrc4={"/images/vendors/solea/solea-4.png"}
            img4Alt={"Hand-crafted bags and clothing by solea"}
            imgSrc5={"/images/vendors/solea/solea-5.png"}
            img5Alt={"Hand-crafted bags and clothing by solea"}
            imgSrc6={"/images/vendors/solea/solea-6.png"}
            img6Alt={"Hand-crafted bags and clothing by solea"}
            imgSrc7={"/images/vendors/solea/solea-7.png"}
            img7Alt={"Hand-crafted bags and clothing by solea"}
            imgSrc8={"/images/vendors/solea/solea-8.png"}
            img8Alt={"Hand-crafted bags and clothing by solea"}
            imgSrc9={""}
            img9Alt={""}
            imgSrc10={""}
            img10Alt={""}
          />
        </div>
      </div>
    </div>
  )
}
