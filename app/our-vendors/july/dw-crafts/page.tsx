import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe } from "lucide-react"
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
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">DW Crafts</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/dw-crafts/dw-crafts-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for dw crafts"
          />
          <div className={styles.bio}><p>We make wood crafts in the shop at our home in Woodinville, WA. We work with pine, fir, cedar, and a variety of hardwoods. Using only stains and dyes allows the grain and the beauty of the wood to shine through in our creations. Our home decor items work well for everyday use, and we create holiday/seasonal items as well.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/profile.php?id=61555836982489"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://dwcrafts.net/"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/dw-crafts/dw-crafts-1.jpg"}
            img1Alt={"wood crafts by DW Crafts"}
            imgSrc2={"/images/vendors/dw-crafts/dw-crafts-2.jpg"}
            img2Alt={"wood crafts by DW Crafts"}
            imgSrc3={"/images/vendors/dw-crafts/dw-crafts-3.jpg"}
            img3Alt={"wood crafts by DW Crafts"}
            imgSrc4={"/images/vendors/dw-crafts/dw-crafts-4.jpg"}
            img4Alt={"wood crafts by DW Crafts"}
            imgSrc5={"/images/vendors/dw-crafts/dw-crafts-5.jpg"}
            img5Alt={"wood crafts by DW Crafts"}
            imgSrc6={"/images/vendors/dw-crafts/dw-crafts-6.jpg"}
            img6Alt={"wood crafts by DW Crafts"}
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
