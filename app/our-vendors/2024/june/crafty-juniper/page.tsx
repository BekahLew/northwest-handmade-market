import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Globe } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/june"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to June
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Crafty Juniper Bags</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/crafty-juniper-2/crafty-juniper-bio-pic.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for crafty juniper"
          />
          <div className={styles.bio}>
            <p>I started Crafty Juniper 4 years ago, looking for an outlet to my passion for sewing and combining color and fabric.  With an industrial sewing machine I can create messenger, crossbody and tote bags with extra strength and durability.  I offer a variety of styles and sizes, from wallets to travel bags using leather, waxed canvas, vinyl, Pendleton wool and upcycled upholstery fabric.  You&apos;re sure to find something that suits your needs, from a small cell phone pouch, to cosmetic bag or convertible back pack.</p>
            <p>- Lynda Bramlett, owner, Crafty Juniper</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/crafty_juniper/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://craftyjuniperbags.com/"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/craftyjuniperbags"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className={styles.pinterestIcon + " p-[.9rem] hover:scale-125 transition"}
              href="https://www.pinterest.com/crafty_juniper/"
              target="_blank"
              rel="noopener"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="dark:fill-[#E1E7EF] fill-[#0F172A]" width="35" height="35" viewBox="0 0 384 512"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg>              
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/crafty-juniper-2/crafty-juniper-1.jpg"}
            img1Alt={"Handmade bags by Craft Juniper"}
            imgSrc2={"/images/vendors/crafty-juniper-2/crafty-juniper-2.jpg"}
            img2Alt={"Handmade bags by Craft Juniper"}
            imgSrc3={"/images/vendors/crafty-juniper-2/crafty-juniper-3.png"}
            img3Alt={"Handmade bags by Craft Juniper"}
            imgSrc4={"/images/vendors/crafty-juniper-2/crafty-juniper-4.png"}
            img4Alt={"Handmade bags by Craft Juniper"}
            imgSrc5={"/images/vendors/crafty-juniper-2/crafty-juniper-5.png"}
            img5Alt={"Handmade bags by Craft Juniper"}
            imgSrc6={"/images/vendors/crafty-juniper-2/crafty-juniper-6.png"}
            img6Alt={"Handmade bags by Craft Juniper"}
            imgSrc7={"/images/vendors/crafty-juniper-2/crafty-juniper-7.jpg"}
            img7Alt={"Handmade bags by Craft Juniper"}
            imgSrc8={"/images/vendors/crafty-juniper-2/crafty-juniper-8.png"}
            img8Alt={"Handmade bags by Craft Juniper"}
            imgSrc9={"/images/vendors/crafty-juniper-2/crafty-juniper-9.png"}
            img9Alt={"Handmade bags by Craft Juniper"}
            imgSrc10={"/images/vendors/crafty-juniper-2/crafty-juniper-10.png"}
            img10Alt={"Handmade bags by Craft Juniper"}
          />
        </div>
      </div>
    </div>
  )
}
