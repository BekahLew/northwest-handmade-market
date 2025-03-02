import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/august"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to August
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Cards by Meesh</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/cards-by-meesh/cards-by-meesh-bio.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for Cards by Meesh"
          />
          <div className={styles.bio}>
            <p>I first started on my handmade greeting card adventure in 2018. My inspiration came from wanting to send the neices and nephews of a close friend each a snowflake card for Christmas. At that time, the only tools I had were a pair of scissors and a ruler.</p>
            <p>Over the past six years, I have added to my collection of tools and now have multiple paper cutters, dozens of hand punches and hundreds of acrylic stamps.</p>
            <p>I often find a layout that I like so I&apos;ll use that over and over again with different colors and paper designs. However I do also enjoy making unique cards specific to a person like a Minion card or a dinosaur card for a kid&apos;s birthday, or a &quot;level 30 unlocked&quot; card for a 30th birthday.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/cardsbymeesh?igsh=MTFqaWNzNnI1MHcyaw=="
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/cards-by-meesh/cards-by-meesh-1.jpg"}
            img1Alt={"handmade cards from cards by meesh"}
            imgSrc2={"/images/vendors/cards-by-meesh/cards-by-meesh-2.jpg"}
            img2Alt={"handmade cards from cards by meesh"}
            imgSrc3={"/images/vendors/cards-by-meesh/cards-by-meesh-3.jpg"}
            img3Alt={"handmade cards from cards by meesh"}
            imgSrc4={"/images/vendors/cards-by-meesh/cards-by-meesh-4.jpg"}
            img4Alt={"handmade cards from cards by meesh"}
            imgSrc5={"/images/vendors/cards-by-meesh/cards-by-meesh-5.jpg"}
            img5Alt={"handmade cards from cards by meesh"}
            imgSrc6={"/images/vendors/cards-by-meesh/cards-by-meesh-6.jpg"}
            img6Alt={"handmade cards from cards by meesh"}
            imgSrc7={"/images/vendors/cards-by-meesh/cards-by-meesh-7.jpg"}
            img7Alt={"handmade cards from cards by meesh"}
            imgSrc8={"/images/vendors/cards-by-meesh/cards-by-meesh-8.jpg"}
            img8Alt={"handmade cards from cards by meesh"}
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
