import Image from "next/image"
import Link from "next/link"
import { Instagram, ShoppingBag } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Sweet D&apos;lily Shop</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/sweet-d-lily-shop-new-2025/sweet-d-lily-shop-new-2025-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for sweet d lily shop"
          />
          <div className={styles.bio}><p>Sewing is My hobby, through my hobby I found my happiness and hopefully my creation can make others happy.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/sweetdlilyshop?igsh=MWRnMmk5eHN0M2R5cQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://sweetdlilyshop.etsy.com/"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/sweet-d-lily-shop-new-2025/sweet-d-lily-shop-new-2025-1.jpeg"}
            img1Alt={"Handmade sewn goods by Sweet d lily shop"}
            imgSrc2={"/images/vendors/sweet-d-lily-shop-new-2025/sweet-d-lily-shop-new-2025-2.jpeg"}
            img2Alt={"Handmade sewn goods by Sweet d lily shop"}
            imgSrc3={"/images/vendors/sweet-d-lily-shop-new-2025/sweet-d-lily-shop-new-2025-3.jpeg"}
            img3Alt={"Handmade sewn goods by Sweet d lily shop"}
            imgSrc4={"/images/vendors/sweet-d-lily-shop-new-2025/sweet-d-lily-shop-new-2025-4.jpeg"}
            img4Alt={"Handmade sewn goods by Sweet d lily shop"}
            imgSrc5={"/images/vendors/sweet-d-lily-shop-new-2025/sweet-d-lily-shop-new-2025-5.jpeg"}
            img5Alt={"Handmade sewn goods by Sweet d lily shop"}
            imgSrc6={"/images/vendors/sweet-d-lily-shop-new-2025/sweet-d-lily-shop-new-2025-6.jpeg"}
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
