import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/september"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to September
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Sugarcane Beauty</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/sugarcane-beauty/sugarcane-beauty-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for sugarcane-beauty"
          />
          <div className={styles.bio}><p>At Sugarcane Beauty, Robyn formulates and crafts sustainable self-care that rivals conventional high-end products using her educational background in sustainability and chemistry. We provide shampoo bars, conditioner bars, lotions, body butters, pet products, and more!</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://Instagram.com/sugarcanebeautyseattle"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://sugarcanebeauty.com"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/sugarcane-beauty/sugarcane-beauty-1.jpg"}
            img1Alt={"bath and body products by sugarcane beauty"}
            imgSrc2={"/images/vendors/sugarcane-beauty/sugarcane-beauty-2.png"}
            img2Alt={"bath and body products by sugarcane beauty"}
            imgSrc3={"/images/vendors/sugarcane-beauty/sugarcane-beauty-3.png"}
            img3Alt={"bath and body products by sugarcane beauty"}
            imgSrc4={"/images/vendors/sugarcane-beauty/sugarcane-beauty-4.png"}
            img4Alt={"bath and body products by sugarcane beauty"}
            imgSrc5={"/images/vendors/sugarcane-beauty/sugarcane-beauty-5.jpg"}
            img5Alt={"bath and body products by sugarcane beauty"}
            imgSrc6={"/images/vendors/sugarcane-beauty/sugarcane-beauty-6.png"}
            img6Alt={"bath and body products by sugarcane beauty"}
            imgSrc7={"/images/vendors/sugarcane-beauty/sugarcane-beauty-7.png"}
            img7Alt={"bath and body products by sugarcane beauty"}
            imgSrc8={"/images/vendors/sugarcane-beauty/sugarcane-beauty-8.png"}
            img8Alt={"bath and body products by sugarcane beauty"}
            imgSrc9={"/images/vendors/sugarcane-beauty/sugarcane-beauty-9.png"}
            img9Alt={"bath and body products by sugarcane beauty"}
            imgSrc10={"/images/vendors/sugarcane-beauty/sugarcane-beauty-10.png"}
            img10Alt={"bath and body products by sugarcane beauty"}
          />
        </div>
      </div>
    </div>
  )
}
