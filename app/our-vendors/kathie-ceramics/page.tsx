import Image from "next/image"
import Link from "next/link"
import { Instagram, Globe, Facebook } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Kathie Ceramics</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/kathie-ceramics/kathie-ceramics-logo-new.jpeg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for kathie ceramics"
          />
          <div className={styles.bio}>
            <p>I am an independent ceramic artist, passionate about creating functional, handcrafted pieces inspired by the beauty of plants and nature. From mugs, bowls, vases, and planters, each piece is thoughtfully crafted to bring warmth, texture, and a natural touch to everyday life.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/kathie_ceramics"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/kathie-ceramics/kathie-ceramics-2.jpeg"}
            img1Alt={"Hand-crafted pottery by Kathie Ceramics"}
            imgSrc2={"/images/vendors/kathie-ceramics/kathie-ceramics-1.jpeg"}
            img2Alt={"Hand-crafted pottery by Kathie Ceramics"}
            imgSrc3={"/images/vendors/kathie-ceramics/kathie-ceramics-3.jpeg"}
            img3Alt={"Hand-crafted pottery by Kathie Ceramics"}
            imgSrc4={"/images/vendors/kathie-ceramics/kathie-ceramics-4.jpeg"}
            img4Alt={"Hand-crafted pottery by Kathie Ceramics"}
            imgSrc5={"/images/vendors/kathie-ceramics/kathie-ceramics-5.jpeg"}
            img5Alt={"Hand-crafted pottery by Kathie Ceramics"}
            imgSrc6={"/images/vendors/kathie-ceramics/kathie-ceramics-6.jpeg"}
            img6Alt={"Hand-crafted pottery by Kathie Ceramics"}
            imgSrc7={"/images/vendors/kathie-ceramics/kathie-ceramics-7.jpeg"}
            img7Alt={"Hand-crafted pottery by Kathie Ceramics"}
            imgSrc8={"/images/vendors/kathie-ceramics/kathie-ceramics-8.jpeg"}
            img8Alt={"Hand-crafted pottery by Kathie Ceramics"}
            imgSrc9={"/images/vendors/kathie-ceramics/kathie-ceramics-9.jpeg"}
            img9Alt={"Hand-crafted pottery by Kathie Ceramics"}
            imgSrc10={"/images/vendors/kathie-ceramics/kathie-ceramics-10.jpeg"}
            img10Alt={"Hand-crafted pottery by Kathie Ceramics"}
          />
        </div>
      </div>
    </div>
  )
}
