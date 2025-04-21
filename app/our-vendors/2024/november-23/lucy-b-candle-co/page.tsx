import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/november-23"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to November 23rd
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Lucy B Candle Co.</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/lucy-b-candle-co/lucy-b-candle-co-logo.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for lucy-b-candle-co"
          />
          <div className={styles.bio}><p>Lucy B Candle Co. makes small batch soy & coconut soy candles. We use non toxic, sustainable ingredients and luxury fragrance oils. Handmade in Seattle. Woman owned.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://lucybcandleco.com"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/lucybcandleco/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/lucybcandleco/"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/lucy-b-candle-co/lucy-b-candle-co-1.jpg"}
            img1Alt={"Handmade candles by lucy b candle co-co"}
            imgSrc2={"/images/vendors/lucy-b-candle-co/lucy-b-candle-co-2.jpg"}
            img2Alt={"Handmade candles by lucy b candle co"}
            imgSrc3={"/images/vendors/lucy-b-candle-co/lucy-b-candle-co-3.jpg"}
            img3Alt={"Handmade candles by lucy b candle co-co"}
            imgSrc4={"/images/vendors/lucy-b-candle-co/lucy-b-candle-co-4.jpg"}
            img4Alt={"Handmade candles by lucy b candle co-co"}
            imgSrc5={"/images/vendors/lucy-b-candle-co/lucy-b-candle-co-5.jpg"}
            img5Alt={"Handmade candles by lucy b candle co-co"}
            imgSrc6={"/images/vendors/lucy-b-candle-co/lucy-b-candle-co-6.jpg"}
            img6Alt={"Handmade candles by lucy b candle co-co"}
            imgSrc7={"/images/vendors/lucy-b-candle-co/lucy-b-candle-co-7.jpg"}
            img7Alt={"Handmade candles by lucy b candle co-co"}
            imgSrc8={"/images/vendors/lucy-b-candle-co/lucy-b-candle-co-8.jpg"}
            img8Alt={"Handmade candles by lucy b candle co-co"}
            imgSrc9={"/images/vendors/lucy-b-candle-co/lucy-b-candle-co-9.jpg"}
            img9Alt={"Handmade candles by lucy b candle co-co"}
            imgSrc10={""}
            img10Alt={""}
          />
        </div>
      </div>
    </div>
  )
}
