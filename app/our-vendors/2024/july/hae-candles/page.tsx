import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/july"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to July
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">HAE Candles</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/hae-candles/hae-candles-logo.jpeg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for HAE candles"
          />
          <div className={styles.bio}>
            <p>HAE Candle is a US Navy Veteran owned, crafted and operated small business. We locally source our ingredients and we hand pour each candle and wax melt. My husband and I are both Navy Veterans and we believe the Anchor to represent Hope, Steadfastness, Trust Stability and Consistent Strength. Our logo is sharing that with our customers.</p>
            <p>Our hand poured and crafted soy candles will take you on a journey of your senses. If you could ever guarantee anything while serving in the Navy, it would be you were going to get a “Promotion Cake” and drink plenty of “Morning Joe.” As you prepared to pull anchor for deployment having “Fresh Pressed Linens” on you rack waiting for you to rest you head. Remember to feeling of comfort and love when you received “Letters from Home” while deployed. Then there are the key moments of requesting “Liberty” and returning to the ship a “Salty Dog”.  These are the memories HAE Candles has captured in our scents.  We have also captured many other scents to capture the seasons of the year.</p>
            <p>In addition to our amazing hand made candle we also believe in giving back to the community. Every month we donate 15% of our sales to local non-profit organizations as we continue to support and serve our communities.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/hae_candles?igsh=MWRqemhqZjQ0aXp3aA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.haecandle.com"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/hae-candles/hae-candles-1.jpeg"}
            img1Alt={"custom candles by HAE candles"}
            imgSrc2={"/images/vendors/hae-candles/hae-candles-2.jpeg"}
            img2Alt={"custom candles by HAE candles"}
            imgSrc3={"/images/vendors/hae-candles/hae-candles-3.jpeg"}
            img3Alt={"custom candles by HAE candles"}
            imgSrc4={"/images/vendors/hae-candles/hae-candles-4.jpeg"}
            img4Alt={"custom candles by HAE candles"}
            imgSrc5={""}
            img5Alt={""}
            imgSrc6={""}
            img6Alt={""}
            imgSrc7={""}
            img7Alt={""}
            imgSrc8={""}
            img8Alt={""}
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
