import Image from "next/image"
import Link from "next/link"
import { Instagram, ShoppingBag } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/august"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to August
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Long Play Art</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/long-play-art/long-play-art-logo.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for long play art"
          />
          <div className={styles.bio}><p>Long Play Art celebrates the fabulous graphic designs of vintage vinyl LP album cover art by upcycling and transforming them into new unique works of pop art or home decor items including laminated placemats, inlaid serving trays, and wall art collages -- all one-of-a-kind  handmade creations.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/longplayartstudio/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://longplayartstudio.etsy.com"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/long-play-art/long-play-art-1.jpeg"}
            img1Alt={"Unique art by long play art"}
            imgSrc2={"/images/vendors/long-play-art/long-play-art-2.jpeg"}
            img2Alt={"Unique art by long play art"}
            imgSrc3={"/images/vendors/long-play-art/long-play-art-3.jpeg"}
            img3Alt={"Unique art by long play art"}
            imgSrc4={"/images/vendors/long-play-art/long-play-art-4.jpeg"}
            img4Alt={"Unique art by long play art"}
            imgSrc5={"/images/vendors/long-play-art/long-play-art-5.jpeg"}
            img5Alt={"Unique art by long play art"}
            imgSrc6={"/images/vendors/long-play-art/long-play-art-6.jpeg"}
            img6Alt={"Unique art by long play art"}
            imgSrc7={"/images/vendors/long-play-art/long-play-art-7.jpeg"}
            img7Alt={"Unique art by long play art"}
            imgSrc8={"/images/vendors/long-play-art/long-play-art-8.jpeg"}
            img8Alt={"Unique art by long play art"}
            imgSrc9={"/images/vendors/long-play-art/long-play-art-9.jpeg"}
            img9Alt={"Unique art by long play art"}
            imgSrc10={"/images/vendors/long-play-art/long-play-art-10.jpeg"}
            img10Alt={"Unique art by long play art"}
          />
        </div>
      </div>
    </div>
  )
}
