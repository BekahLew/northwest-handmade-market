import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Globe, Instagram } from "lucide-react"
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
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Tizana Mexicana</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/tizana-mexicana/tizana-mexicana-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for tizana mexicana"
          />
          <div className={styles.bio}>
            <p>Rooted in the vibrant Guerrero, Mexico, I fell in love with artisanal craftsmanship from an early age. Surrounded by artisans crafting their masterpieces, I witnessed the joy and creativity in their work. As a migrant to the U.S., I saw the challenges these artisans face and felt driven to support them.</p>
            <p>TIZANA Mexicana celebrates culture. We connect customers with products that embody Mexican artistry by providing a space to represent these artisans. Our mission addresses the lack of access to authentic Mexican artisanal products, bridging the gap caused by logistical, technological, and language barriers, and ensuring communities here feel represented.</p>
            <p>We bridge the gap by creating a community-centric ecosystem that promotes growth and celebrates Mexican artistry. Each product tells a unique story of dedication and creativity, bringing joy to both the makers and our customers. Through TIZANA Mexicana, we foster a collaborative environment where artisans and community thrive together.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://tizanamexicana.etsy.com"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/tizanamexicana"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://linktr.ee/tizanamexicana"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/tizana-mexicana/tizana-mexicana-1.png"}
            img1Alt={"Mexican art by tizana mexicana"}
            imgSrc2={"/images/vendors/tizana-mexicana/tizana-mexicana-10.png"}
            img2Alt={"Mexican art by tizana mexicana"}
            imgSrc3={"/images/vendors/tizana-mexicana/tizana-mexicana-3.png"}
            img3Alt={"Mexican art by tizana mexicana"}
            imgSrc4={"/images/vendors/tizana-mexicana/tizana-mexicana-4.png"}
            img4Alt={"Mexican art by tizana mexicana"}
            imgSrc5={"/images/vendors/tizana-mexicana/tizana-mexicana-5.png"}
            img5Alt={"Mexican art by tizana mexicana"}
            imgSrc6={"/images/vendors/tizana-mexicana/tizana-mexicana-6.png"}
            img6Alt={"Mexican art by tizana mexicana"}
            imgSrc7={"/images/vendors/tizana-mexicana/tizana-mexicana-7.png"}
            img7Alt={"Mexican art by tizana mexicana"}
            imgSrc8={"/images/vendors/tizana-mexicana/tizana-mexicana-8.png"}
            img8Alt={"Mexican art by tizana mexicana"}
            imgSrc9={"/images/vendors/tizana-mexicana/tizana-mexicana-9.png"}
            img9Alt={"Mexican art by tizana mexicana"}
            imgSrc10={"/images/vendors/tizana-mexicana/tizana-mexicana-2.png"}
            img10Alt={"Mexican art by tizana mexicana"}
          />
        </div>
      </div>
    </div>
  )
}
