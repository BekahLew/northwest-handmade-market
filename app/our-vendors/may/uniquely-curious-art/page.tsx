import Image from "next/image"
import Link from "next/link"
import { Instagram, Globe, ShoppingBag } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/may"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to May
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Uniquely Curious Art</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/uniquely-curious-art/uniquely-curious-art-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for uniquely curious art"
          />
          <div className={styles.bio}>
            <p>I create each piece using the grain in a piece of wood and a lot of creativity to help define what the painting will look like.  No two pieces will ever be the same.  While I have a preference for using reclaimed wood scraps (generally from a friend renovating their home, or a local lumber yard&apos;s scrap pile), I have created several pieces using wood circles because they make such great faces with fun expressions.  I&apos;m a women-owned business located near UW in Seattle.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/uniquelycuriousart/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.etsy.com/shop/UniquelyCuriousbyMH"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.UniquelyCuriousArt.com"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/uniquely-curious-art/uniquely-curious-art-1.JPG"}
            img1Alt={"Unique art by Uniquely Curious Art"}
            imgSrc2={"/images/vendors/uniquely-curious-art/uniquely-curious-art-2.JPG"}
            img2Alt={"Unique art by Uniquely Curious Art"}
            imgSrc3={"/images/vendors/uniquely-curious-art/uniquely-curious-art-3.JPG"}
            img3Alt={"Unique art by Uniquely Curious Art"}
            imgSrc4={"/images/vendors/uniquely-curious-art/uniquely-curious-art-4.jpg"}
            img4Alt={"Unique art by Uniquely Curious Art"}
            imgSrc5={"/images/vendors/uniquely-curious-art/uniquely-curious-art-5.jpg"}
            img5Alt={"Unique art by Uniquely Curious Art"}
            imgSrc6={"/images/vendors/uniquely-curious-art/uniquely-curious-art-6.jpg"}
            img6Alt={"Unique art by Uniquely Curious Art"}
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
