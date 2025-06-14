import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">blue-kangaroo-crafts</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/blue-kangaroo-crafts/blue-kangaroo-crafts-logo.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for blue-kangaroo-crafts"
          />
          <div className={styles.bio}><p>Blue Kangaroo Crafts is owned by Cheryl Hofer. Making trays for friends 2 years ago became a small home-based business. I enjoy creating each tray/wall hanging which are handmade, one of a kind, made with buttons, beads, dried flowers, ribbons and objects. Each item has a top of acrylic so that foods, drinks can be used on the tray.  Some trays have spinners on the bottom to create a quasi-lazy susan. They are works of art that some customers choose to hang instead of using as a tray.</p></div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/blue-kangaroo-crafts/blue-kangaroo-crafts-1.jpg"}
            img1Alt={"Handmade bags by blue-kangaroo-crafts"}
            imgSrc2={"/images/vendors/blue-kangaroo-crafts/blue-kangaroo-crafts-2.jpg"}
            img2Alt={"Handmade bags by blue-kangaroo-crafts"}
            imgSrc3={"/images/vendors/blue-kangaroo-crafts/blue-kangaroo-crafts-3.jpg"}
            img3Alt={"Handmade bags by blue-kangaroo-crafts"}
            imgSrc4={"/images/vendors/blue-kangaroo-crafts/blue-kangaroo-crafts-4.jpg"}
            img4Alt={"Handmade bags by blue-kangaroo-crafts"}
            imgSrc5={"/images/vendors/blue-kangaroo-crafts/blue-kangaroo-crafts-5.jpg"}
            img5Alt={"Handmade bags by blue-kangaroo-crafts"}
            imgSrc6={"/images/vendors/blue-kangaroo-crafts/blue-kangaroo-crafts-6.jpg"}
            img6Alt={"Handmade bags by blue-kangaroo-crafts"}
            imgSrc7={"/images/vendors/blue-kangaroo-crafts/blue-kangaroo-crafts-7.jpg"}
            img7Alt={"Handmade bags by blue-kangaroo-crafts"}
            imgSrc8={"/images/vendors/blue-kangaroo-crafts/blue-kangaroo-crafts-8.jpg"}
            img8Alt={"Handmade bags by blue-kangaroo-crafts"}
            imgSrc9={"/images/vendors/blue-kangaroo-crafts/blue-kangaroo-crafts-9.jpg"}
            img9Alt={"Handmade bags by blue-kangaroo-crafts"}
            imgSrc10={""}
            img10Alt={""}
          />
        </div>
      </div>
    </div>
  )
}
