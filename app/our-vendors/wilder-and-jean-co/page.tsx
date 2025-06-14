import Image from "next/image"
import Link from "next/link"
import { Instagram, ShoppingBag } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Wilder and Jean Co.</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/wilder-and-jean-new-2025/wilder-and-jean-new-2025-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for wilder and jean co"
          />
          <div className={styles.bio}><p>Wilder and Jean Co. offers handmade crochet heirloom pieces with a modern, yet timeless, style. Everything is handmade by me, Megan! I started to learn crochet during maternity leave with my first in 2023, and ended up not returning to work and started selling my handmade pieces. Now I&apos;m a mom of 2 boys and love making cute and cozy things for all, but especially little ones!</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/wilderandjeanco"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.etsy.com/shop/wilderandjean/?etsrc=sdt"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/wilder-and-jean-new-2025/wilder-and-jean-new-2025-1.jpeg"}
            img1Alt={"Handmade crochet plushies by wilder and jean"}
            imgSrc2={"/images/vendors/wilder-and-jean-new-2025/wilder-and-jean-new-2025-2.jpeg"}
            img2Alt={"Handmade crochet plushies by wilder and jean"}
            imgSrc3={"/images/vendors/wilder-and-jean-new-2025/wilder-and-jean-new-2025-3.jpeg"}
            img3Alt={"Handmade crochet plushies by wilder and jean"}
            imgSrc4={"/images/vendors/wilder-and-jean-new-2025/wilder-and-jean-new-2025-4.jpeg"}
            img4Alt={"Handmade crochet plushies by wilder and jean"}
            imgSrc5={"/images/vendors/wilder-and-jean-new-2025/wilder-and-jean-new-2025-5.jpeg"}
            img5Alt={"Handmade crochet plushies by wilder and jean"}
            imgSrc6={"/images/vendors/wilder-and-jean-new-2025/wilder-and-jean-new-2025-6.jpeg"}
            img6Alt={"Handmade crochet plushies by wilder and jean"}
            imgSrc7={"/images/vendors/wilder-and-jean-new-2025/wilder-and-jean-new-2025-7.jpeg"}
            img7Alt={"Handmade crochet plushies by wilder and jean"}
            imgSrc8={"/images/vendors/wilder-and-jean-new-2025/wilder-and-jean-new-2025-8.jpeg"}
            img8Alt={"Handmade crochet plushies by wilder and jean"}
            imgSrc9={"/images/vendors/wilder-and-jean-new-2025/wilder-and-jean-new-2025-9.jpeg"}
            img9Alt={"Handmade crochet plushies by wilder and jean"}
            imgSrc10={"/images/vendors/wilder-and-jean-new-2025/wilder-and-jean-new-2025-10.jpeg"}
            img10Alt={"Handmade crochet plushies by wilder and jean"}
          />
        </div>
      </div>
    </div>
  )
}
