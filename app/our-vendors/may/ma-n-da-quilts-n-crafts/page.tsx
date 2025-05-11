import Image from "next/image"
import Link from "next/link"
import { Instagram, Globe, Facebook } from "lucide-react"
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
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Ma&apos; n&apos; Da&apos; Quilts n&apos; Crafts</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/ma-n-da-quilts-n-crafts/ma-n-da-quilts-n-crafts-7.jpeg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for ma-n-da-quilts-n-crafts"
          />
          <div className={styles.bio}>
            <p>We are a mother and daughter team in making beautiful quilts and seasonal handmade decor to warm up your home. Mom does all the hand quilting on the quilts and Daughter creates handmade decor along with upcycling vintage items.</p>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/ma-n-da-quilts-n-crafts/ma-n-da-quilts-n-crafts-1.jpg"}
            img1Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc2={"/images/vendors/ma-n-da-quilts-n-crafts/ma-n-da-quilts-n-crafts-2.jpeg"}
            img2Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc3={"/images/vendors/ma-n-da-quilts-n-crafts/ma-n-da-quilts-n-crafts-3.jpeg"}
            img3Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc4={"/images/vendors/ma-n-da-quilts-n-crafts/ma-n-da-quilts-n-crafts-4.jpg"}
            img4Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc5={"/images/vendors/ma-n-da-quilts-n-crafts/ma-n-da-quilts-n-crafts-5.jpg"}
            img5Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc6={"/images/vendors/ma-n-da-quilts-n-crafts/ma-n-da-quilts-n-crafts-6.jpg"}
            img6Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc7={"/images/vendors/ma-n-da-quilts-n-crafts/ma-n-da-quilts-n-crafts-7.jpeg"}
            img7Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc8={"/images/vendors/ma-n-da-quilts-n-crafts/ma-n-da-quilts-n-crafts-8.jpg"}
            img8Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc9={"/images/vendors/ma-n-da-quilts-n-crafts/ma-n-da-quilts-n-crafts-9.jpg"}
            img9Alt={"Hand-crafted bags by crafty juniper"}
            imgSrc10={""}
            img10Alt={""}
          />
        </div>
      </div>
    </div>
  )
}
