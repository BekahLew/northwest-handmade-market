import Image from "next/image"
import Link from "next/link"
import { Globe, ShoppingBag } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Yarrow and the Sea</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/yarrow-and-the-sea/yarrow-and-the-sea-bio.jpeg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for yarrow-and-the-sea"
          />
          <div className={styles.bio}>
            <p>As an open-water sea swimmer in Pacific Northwest, much of my work is inspired by my cold water sea swims.  I use analog & darkroom techniques to create photographic prints and use an array of other methods to make pieces for the home. My studio is abundant and I use the Van Dyke, Cyanotype, Lith print, Tin Type and other alternative processes to create unique pieces of art.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.etsy.com/shop/YARROWANDTHESEA"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://bethaniemitchellfineart.weebly.com/"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/yarrow-and-the-sea/yarrow-and-the-sea-1.jpeg"}
            img1Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc2={"/images/vendors/yarrow-and-the-sea/yarrow-and-the-sea-2.jpeg"}
            img2Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc3={"/images/vendors/yarrow-and-the-sea/yarrow-and-the-sea-3.jpeg"}
            img3Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc4={"/images/vendors/yarrow-and-the-sea/yarrow-and-the-sea-4.jpeg"}
            img4Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc5={"/images/vendors/yarrow-and-the-sea/yarrow-and-the-sea-5.jpeg"}
            img5Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc6={"/images/vendors/yarrow-and-the-sea/yarrow-and-the-sea-6.jpeg"}
            img6Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc7={"/images/vendors/yarrow-and-the-sea/yarrow-and-the-sea-7.jpeg"}
            img7Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc8={"/images/vendors/yarrow-and-the-sea/yarrow-and-the-sea-8.jpeg"}
            img8Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc9={"/images/vendors/yarrow-and-the-sea/yarrow-and-the-sea-9.jpeg"}
            img9Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc10={"/images/vendors/yarrow-and-the-sea/yarrow-and-the-sea-10.jpeg"}
            img10Alt={"Hand-crafted bags by crafty juniper"}
          />
        </div>
      </div>
    </div>
  )
}
