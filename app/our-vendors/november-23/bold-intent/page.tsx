import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/november-23"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to November 23rd
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Bold Intent</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/bold-intent/bold-intent-bio-new.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for bold-intent"
          />
          <div className={styles.bio}><p>I am a Candle & Jewelry designer who is in their 4th year of creating usable, decorative items with the Boldest of Intent.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/_boldintent_"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/bold-intent/bold-intent-1.jpg"}
            img1Alt={"Candles and jewelry by bold intent"}
            imgSrc2={"/images/vendors/bold-intent/bold-intent-2.jpg"}
            img2Alt={"Candles and jewelry by bold intent"}
            imgSrc3={"/images/vendors/bold-intent/bold-intent-3.jpg"}
            img3Alt={"Candles and jewelry by bold intent"}
            imgSrc4={"/images/vendors/bold-intent/bold-intent-4.jpg"}
            img4Alt={"Candles and jewelry by bold intent"}
            imgSrc5={"/images/vendors/bold-intent/bold-intent-5.jpg"}
            img5Alt={"Candles and jewelry by bold intent"}
            imgSrc6={"/images/vendors/bold-intent/bold-intent-6.jpg"}
            img6Alt={"Candles and jewelry by bold intent"}
            imgSrc7={"/images/vendors/bold-intent/bold-intent-7.jpg"}
            img7Alt={"Candles and jewelry by bold intent"}
            imgSrc8={"/images/vendors/bold-intent/bold-intent-8.webp"}
            img8Alt={"Candles and jewelry by bold intent"}
            imgSrc9={"/images/vendors/bold-intent/bold-intent-9.jpg"}
            img9Alt={"Candles and jewelry by bold intent"}
            imgSrc10={"/images/vendors/bold-intent/bold-intent-10.jpg"}
            img10Alt={"Candles and jewelry by bold intent"}
          />
        </div>
      </div>
    </div>
  )
}
