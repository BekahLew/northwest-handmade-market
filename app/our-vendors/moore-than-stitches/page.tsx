import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, ShoppingBag } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Moore Than Stitches</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/moore-than-stitches/moore-than-stitches-bio.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for moore-than-stitches"
          />
          <div className={styles.bio}><p>My name is Bronwyn and I am the owner of Moore Than Stitches. I started this business in 2019 as an opportunity to share my work with others. I have been creating fabric goods since I was old enough to sit at the sewing machine. My grandmother taught me all she knew about sewing and I use that knowledge to this day. I am always looking for new goods to share!</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/moorethanstitches/"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="http://instagram.com/moorethastitches"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.etsy.com/shop/moorethanstitches520"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/moore-than-stitches/moore-than-stitches-1.jpg"}
            img1Alt={"handmade sewn items by moore-than-stitches"}
            imgSrc2={"/images/vendors/moore-than-stitches/moore-than-stitches-2.JPG"}
            img2Alt={"handmade sewn items by moore-than-stitches"}
            imgSrc3={"/images/vendors/moore-than-stitches/moore-than-stitches-3.jpg"}
            img3Alt={"handmade sewn items by moore-than-stitches"}
            imgSrc4={"/images/vendors/moore-than-stitches/moore-than-stitches-4.jpg"}
            img4Alt={"handmade sewn items by moore-than-stitches"}
            imgSrc5={"/images/vendors/moore-than-stitches/moore-than-stitches-5.JPG"}
            img5Alt={"handmade sewn items by moore-than-stitches"}
            imgSrc6={"/images/vendors/moore-than-stitches/moore-than-stitches-6.jpg"}
            img6Alt={"handmade sewn items by moore-than-stitches"}
            imgSrc7={"/images/vendors/moore-than-stitches/moore-than-stitches-7.jpg"}
            img7Alt={"handmade sewn items by moore-than-stitches"}
            imgSrc8={"/images/vendors/moore-than-stitches/moore-than-stitches-8.jpg"}
            img8Alt={"handmade sewn items by moore-than-stitches"}
            imgSrc9={"/images/vendors/moore-than-stitches/moore-than-stitches-9.jpg"}
            img9Alt={"handmade sewn items by moore-than-stitches"}
            imgSrc10={""}
            img10Alt={""}
          />
        </div>
      </div>
    </div>
  )
}
