import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

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
          <div className={styles.bio}><p>We are DW Crafts and we make wood-crafted home decor in our shop at our home in Woodinville, WA. We work with cedar, fir, pine, various hardwoods and reclaimed wood when we can get it. We use stains and dyes instead of paints so the beauty of the grain of the wood shines through in our creations. </p></div>
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
            imgSrc1={"/images/vendors/dw-crafts/dw-crafts-1-new.jpg"}
            img1Alt={"wood crafts by DW Crafts"}
            imgSrc2={"/images/vendors/dw-crafts/dw-crafts-2-new.jpg"}
            img2Alt={"wood crafts by DW Crafts"}
            imgSrc3={"/images/vendors/dw-crafts/dw-crafts-3-new.jpg"}
            img3Alt={"wood crafts by DW Crafts"}
            imgSrc4={"/images/vendors/dw-crafts/dw-crafts-4-new.jpg"}
            img4Alt={"wood crafts by DW Crafts"}
            imgSrc5={"/images/vendors/dw-crafts/dw-crafts-5-new.jpg"}
            img5Alt={"wood crafts by DW Crafts"}
            imgSrc6={"/images/vendors/dw-crafts/dw-crafts-6-new.jpg"}
            img6Alt={"wood crafts by DW Crafts"}
            imgSrc7={"/images/vendors/dw-crafts/dw-crafts-7-new.jpg"}
            img7Alt={"wood crafts by DW Crafts"}
            imgSrc8={"/images/vendors/dw-crafts/dw-crafts-8-new.jpg"}
            img8Alt={"wood crafts by DW Crafts"}
            imgSrc9={"/images/vendors/dw-crafts/dw-crafts-9-new.jpg"}
            img9Alt={""}
            imgSrc10={""}
            img10Alt={""}
          />
        </div>
      </div>
    </div>
  )
}
