import Image from "next/image"
import Link from "next/link"
import { Facebook, ShoppingBag, Globe } from "lucide-react"
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
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Red Sunset Designs</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/red-sunset-designs/red-sunset-designs-logo.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for red sunset designs"
          />
          <div className={styles.bio}><p>Andrea Misiano of Red Sunset Designs is a Seattle based artist.  No twig, stone or seashell is safe from her roving eye and crafty hands.  Each piece is a unique, hand-made tableau of the Northwest landscape.</p></div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/red-sunset-designs/red-sunset-designs-2.jpg"}
            img1Alt={"Unique stone and seashell art by red sunset designs"}
            imgSrc2={"/images/vendors/red-sunset-designs/red-sunset-designs-1.jpg"}
            img2Alt={"Unique stone and seashell art by red sunset designs"}
            imgSrc3={"/images/vendors/red-sunset-designs/red-sunset-designs-3.jpg"}
            img3Alt={"Unique stone and seashell art by red sunset designs"}
            imgSrc4={"/images/vendors/red-sunset-designs/red-sunset-designs-4.jpg"}
            img4Alt={"Unique stone and seashell art by red sunset designs"}
            imgSrc5={"/images/vendors/red-sunset-designs/red-sunset-designs-5.jpg"}
            img5Alt={"Unique stone and seashell art by red sunset designs"}
            imgSrc6={"/images/vendors/red-sunset-designs/red-sunset-designs-6.jpg"}
            img6Alt={"Unique stone and seashell art by red sunset designs"}
            imgSrc7={"/images/vendors/red-sunset-designs/red-sunset-designs-7.jpg"}
            img7Alt={"Unique stone and seashell art by red sunset designs"}
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
