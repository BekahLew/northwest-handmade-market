import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Instagram, Facebook } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Celestial Fluff</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/celestial-fluff/celestial-fluff-bio.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for celestial-fluff"
          />
          <div className={styles.bio}><p>We offer 100% handmade and hand-sewn plushies! Made with mostly locally sourced soft minky fabric, our creatures range anywhere from dragons to rams. Our product is mostly NOT crochet, and features original and unique patterns that can&apos;t be found anywhere else.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/celestialflufftoys"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/CelestialFluff?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.etsy.com/shop/CelestialFluff"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/celestial-fluff/celestial-fluff-1.jpg"}
            img1Alt={"Handmade plushies by celestial fluff"}
            imgSrc2={"/images/vendors/celestial-fluff/celestial-fluff-2.jpg"}
            img2Alt={"Handmade plushies by celestial fluff"}
            imgSrc3={"/images/vendors/celestial-fluff/celestial-fluff-3.jpg"}
            img3Alt={"Handmade plushies by celestial fluff"}
            imgSrc4={"/images/vendors/celestial-fluff/celestial-fluff-4.jpg"}
            img4Alt={"Handmade plushies by celestial fluff"}
            imgSrc5={"/images/vendors/celestial-fluff/celestial-fluff-5.jpg"}
            img5Alt={"Handmade plushies by celestial fluff"}
            imgSrc6={"/images/vendors/celestial-fluff/celestial-fluff-6.jpg"}
            img6Alt={"Handmade plushies by celestial fluff"}
            imgSrc7={"/images/vendors/celestial-fluff/celestial-fluff-7.jpg"}
            img7Alt={"Handmade plushies by celestial fluff"}
            imgSrc8={"/images/vendors/celestial-fluff/celestial-fluff-8.jpg"}
            img8Alt={"Handmade plushies by celestial fluff"}
            imgSrc9={"/images/vendors/celestial-fluff/celestial-fluff-9.jpg"}
            img9Alt={"Handmade plushies by celestial fluff"}
            imgSrc10={"/images/vendors/celestial-fluff/celestial-fluff-10.jpg"}
            img10Alt={"Handmade plushies by celestial fluff"}
          />
        </div>
      </div>
    </div>
  )
}
