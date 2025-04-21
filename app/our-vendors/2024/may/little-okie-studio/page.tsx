import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/may"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to May
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">LittleOkieStudio</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/little-okie-studio/little-okie-studio-bio.jpeg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for little okie studio"
          />
          <div className={styles.bio}><p>I&apos;m Alee Fazari, the mind and hands behind the world of LittleOkieStudio. Nestled in the vibrant city of Seattle along streets of plum blossoms, my studio is the heart of where my clay babies come to life. I pour my heart into every creation, ensuring that it brings joy, beauty, and a touch of the Pacific Northwest into your home.
My journey with ceramics began with an intro course at the University of Oklahoma for a short while. After graduating from college, life happened. For 2.5 years, clay took a backseat.
November 2023, the allure of the wheel pulled me back in at a local studio. It was like reconnecting with an old and comforting friend. The therapeutic joy of molding clay and the creative freedom had me hooked once again.
So, here I am, blending my Oklahoma roots with the artistic vibe of Seattle and other whimsical interests. Each piece you see is not just ceramics; it&apos;s a revival, a rediscovery, and a touch of my journey back to the wheel.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/littleokiestudio"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://littleokiestudio.etsy.com/"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/little-okie-studio/little-okie-studio-1.jpeg"}
            img1Alt={"pottery by little okie studio"}
            imgSrc2={"/images/vendors/little-okie-studio/little-okie-studio-2.jpeg"}
            img2Alt={"pottery by little okie studio"}
            imgSrc3={"/images/vendors/little-okie-studio/little-okie-studio-3.jpeg"}
            img3Alt={"pottery by little okie studio"}
            imgSrc4={"/images/vendors/little-okie-studio/little-okie-studio-4.jpeg"}
            img4Alt={"pottery by little okie studio"}
            imgSrc5={"/images/vendors/little-okie-studio/little-okie-studio-5.jpeg"}
            img5Alt={"pottery by little okie studio"}
            imgSrc6={"/images/vendors/little-okie-studio/little-okie-studio-6.jpeg"}
            img6Alt={"pottery by little okie studio"}
            imgSrc7={"/images/vendors/little-okie-studio/little-okie-studio-7.jpeg"}
            img7Alt={"pottery by little okie studio"}
            imgSrc8={"/images/vendors/little-okie-studio/little-okie-studio-8.jpeg"}
            img8Alt={"pottery by little okie studio"}
            imgSrc9={"/images/vendors/little-okie-studio/little-okie-studio-9.jpeg"}
            img9Alt={"pottery by little okie studio"}
            imgSrc10={"/images/vendors/little-okie-studio/little-okie-studio-10.jpeg"}
            img10Alt={"pottery by little okie studio"}
          />
        </div>
      </div>
    </div>
  )
}
