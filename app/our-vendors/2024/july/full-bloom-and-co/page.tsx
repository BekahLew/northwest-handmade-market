import Image from "next/image"
import Link from "next/link"
import { Globe, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/july"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to July
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Full Bloom and Co</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/full-bloom-and-co/full-bloom-and-co-logo.jpeg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for full-bloom-and-co"
          />
          <div className={styles.bio}><p>Full Bloom and Co is an art and stationery company that takes the mundane moments of everyday life to create special memories worth remembering. Christy is inspired by the good, the bad, and the ugly of being a mom, wife, and healthcare worker. She creates beautiful imagery to make your physical space and mind a great space to hang out!</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/fullbloomandco"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.fullbloomandco.com"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/full-bloom-and-co/full-bloom-and-co-1.jpeg"}
            img1Alt={"stickers and stationary full-bloom-and-co"}
            imgSrc2={"/images/vendors/full-bloom-and-co/full-bloom-and-co-2.jpeg"}
            img2Alt={"stickers and stationary full-bloom-and-co"}
            imgSrc3={"/images/vendors/full-bloom-and-co/full-bloom-and-co-3.jpeg"}
            img3Alt={"stickers and stationary full-bloom-and-co"}
            imgSrc4={"/images/vendors/full-bloom-and-co/full-bloom-and-co-4.jpeg"}
            img4Alt={"stickers and stationary full-bloom-and-co"}
            imgSrc5={"/images/vendors/full-bloom-and-co/full-bloom-and-co-5.jpeg"}
            img5Alt={"stickers and stationary full-bloom-and-co"}
            imgSrc6={"/images/vendors/full-bloom-and-co/full-bloom-and-co-6.jpeg"}
            img6Alt={"stickers and stationary full-bloom-and-co"}
            imgSrc7={"/images/vendors/full-bloom-and-co/full-bloom-and-co-7.jpeg"}
            img7Alt={"stickers and stationary full-bloom-and-co"}
            imgSrc8={"/images/vendors/full-bloom-and-co/full-bloom-and-co-8.jpeg"}
            img8Alt={"stickers and stationary full-bloom-and-co"}
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
